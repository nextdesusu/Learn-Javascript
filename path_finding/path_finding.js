'use strict';

function logMap(map){
	for (var i = 0; i < map.length; ++i){
		var drawString = "";
		for (var j = 0; j < i.length; ++j){
			drawString += map[i][j].toStirng();
		}
		console.log(drawString);
	}
}

function min(){
	return Math.min.apply(null, arguments);
}

function max(){
	return Math.max.apply(null, arguments);
}

function randomInteger(lowerBoud, upperBound){
	var rand = lowerBoud + Math.random() * (upperBound + 1 - lowerBoud);
    rand = Math.floor(rand);
    return rand;
}

class Queue{
	constructor(){
		this.elements = [];
	}
	
	empty(){
		return this.elements.length == 0;
	}
	
	put(elem){
		this.elements.push(elem);
	}
	
	get(){
		return this.elements.shift()
	}
	
	toString(){
		var str = "";
		for (var i = 0; i < this.elements.length; ++i){
			str += String(this.elements[i]) + ', ';
		}
		return "Queue: " + str;
	}
}

class Tile{
	constructor(blocked = true){
		this.blocked = blocked;
	}
	
	getClassName(){
		if (this.blocked){
			return "blocked";
		}
		return "notBlocked";
	}
	
	str(){
		if (this.blocked){
			return "#"
		}
		return "."
	}
	
	setState(newState){
		this.blocked = newState;
	}
	
	getState(){
		return this.blocked;
	}
}

class Rect{
	constructor(x, y, w, h){
		this.x1 = x;
		this.y1 = y;
		this.x2 = x + w;
		this.y2 = y + h;
	}
	
	center(){
		var centerX = Math.floor((this.x1 + this.x2) / 2);
		var centerY = Math.floor((this.y1 + this.y2) / 2);
		return [centerX, centerY];
	}
	
	intersect(other){
		return this.x1 <= other.x2 && this.x2 >= other.x1 && this.y1 <= other.y2 && this.y2 >= other.y1;
	}
}

class Goal{
	constructor(map){
		this.map = map;
		this.isPlaced = false;
	}
	
	place(x, y){
		this.onTile = this.map.getObject(x, y);
		this.x = x;
		this.y = y;
		this.map.setObject(x, y, this);
		this.isPlaced = true;
	}
	
	getClassName(){
		return 'goal';
	}
}

class Object{
	constructor(map, pointObject){
		this.map = map;
		this.pointObject = pointObject;
		this.blocked = true;
	}
	
	setUp(x, y){
		this.onTile = this.map.getObject(x, y);
		this.x = x;
		this.y = y;
		this.map.setObject(x, y, this);
	}

	getClassName(){
		return 'actor';
	}
	
	move(dx, dy){
		var stepOn = this.map.getObject(this.x + dx, this.y + dy);
		if (!stepOn.blocked){
			this.map.setObject(this.x, this.y, this.onTile);
			this.x += dx;
			this.y += dy;
			this.onTile = this.map.getObject(this.x, this.y);
			if (this.onTile === this.pointObject){
				this.onTile = this.pointObject.onTile;
				this.pointObject.isPlaced = false;
			}
			this.map.setObject(this.x, this.y, this);
		}
	}
}

class Ai{
	constructor(map, actor){
		this.map = map;
		this.actor = actor;
	}
	
	search(start, goal){
		var frontier = new Queue();
		frontier.put(start);
		var cameFrom = {};
		cameFrom[start] = null;

		while (!frontier.empty()){
			var current = frontier.get()

			if (current === goal){
				break;
			}
			
			var neigbours = this.map.neighbors(current);
			for (var i = 0; i < neigbours.length; ++i){
				var coordPair = neigbours[i];
				if (!(coordPair in cameFrom)){
					frontier.put(coordPair)
					cameFrom[coordPair] = current;
				}
			}
		}
		var target = [Number(goal[0]), Number(goal[1])];
		var path = [];
		path.push(target)
		while (target != start){ 
			target = cameFrom[target];
			path.push(target);
		}
		path.reverse();
		this.path = path;
		//console.log(this.path);
	}
	
	createPathTo(x, y){
		this.havePath = true;
		this.stage = 0;
		var actorCoords = [this.actor.x, this.actor.y];
		var goalCoords = [x, y];
		this.search(actorCoords, goalCoords);
	}
	
	move(){
		if (this.path[this.stage]){
			var [actorX, actorY] = [this.actor.x, this.actor.y];
			var [toX, toY] = this.path[this.stage];
			var dx = toX - actorX;
			var dy = toY - actorY;
			this.actor.move(dx, dy);
			++this.stage;
		}
		else {
			this.havePath = false;
		}
	}
}

class Map{
	constructor(width, height, rooms, roomMin, roomMax, table){
		this.width = width;
		this.height = height;
		this.maxRooms = rooms;
		this.minSize = roomMin;
		this.maxSize = roomMax;
		this.MAP = this.newMap();
		this.mainTable = table;
		this.tr = document.createElement("tr");
		this.td = document.createElement("td");
	}
	
	filterAccesible(arr){
		var res = [];
		for (var i = 0; i < arr.length; ++i){
			var [x, y] = arr[i];
			//change to this 0 <= x < this.width && 0 <= y < this.height && !(this.MAP[x][y].blocked)
			if (0 < x < this.width && 0 < y < this.height && !(this.MAP[x][y].blocked)){
				res.push(arr[i]);
			}
		}
		return res;
	}
	
	neighbors(indexes){
		var [x, y] = indexes;
		var results = [[x + 1, y], [x, y - 1], [x - 1, y], [x, y + 1], [x + 1, y - 1], [x - 1, y + 1], [x + 1, y + 1], [x - 1, y - 1]];
		var result = this.filterAccesible(results);
		return result;
	}
	
	getActorCoords(){
		return [this.actorX, this.actorY];
	}
	
	createHTunnel(map, x1, x2, y){
        for (var x = min(x1, x2); x < max(x1, x2) + 1; ++x){
            map[x][y].setState(false);
		}
	}

    createVTunnel(map, y1, y2, x){
        for (var y = min(y1, y2); y < max(y1, y2) + 1; ++y){
            map[x][y].setState(false);
		}
	}

    createRoom(map, room){
        for (var x = room.x1; x < room.x2 + 1; ++x){
            for (var y = room.y1; y < room.y2 + 1; ++y){
                map[x][y].setState(false);
			}
		}
	}
	
	createRooms(map){ 
        var rooms = [];
        var numRooms = 0;
        var created = false;
        while (!(numRooms == this.maxRooms)){       
            var w = randomInteger(this.minSize, this.maxSize);
            var h = randomInteger(this.minSize, this.maxSize);
            var x = randomInteger(1, this.width - w - 2);
            var y = randomInteger(1, this.height - h - 2);
            var newRoom = new Rect(x, y, w, h);
            var failed = false;
            for (var i = 0; i < rooms.length; ++i){
                if (newRoom.intersect(rooms[i])){
                    failed = true;
                    break;
				}
			}
            if (!failed){
                this.createRoom(map, newRoom);
				var center = newRoom.center();
                var newX = center[0];
				var newY = center[1];
                if (numRooms === 0){
                    this.actorX = newX;
                    this.actorY = newY; 
				}
                else{
                    if (numRooms === this.maxRooms - 1){
                        this.goalX = newX;
                        this.goalY = newY;
					}
                    //all rooms after the first:
                    //connect it to the previous room with a tunnel

                    //center coordinates of previous room
					var prevRoom = rooms[numRooms-1].center();
                    var prevX = prevRoom[0];
					var prevY = prevRoom[1];

					//draw a coin (random number that is either 0 or 1)
					//console.log('**********************');
					//console.log(newX);
					//console.log(newY);
					//console.log(prevX);
					//console.log(prevY);
					//console.log('**********************');
                    if (randomInteger(0, 1) === 1){
                        //first move horizontally, then vertically
                        this.createHTunnel(map, prevX, newX, prevY)
                        this.createVTunnel(map, prevY, newY, newX)
					}
                    else{
                        //first move vertically, then horizontally
                        this.createVTunnel(map, prevY, newY, prevX)
                        this.createHTunnel(map, prevX, newX, newY)

                        //finally, append the new room to the list
					}
				}
				rooms.push(newRoom)
				numRooms += 1
			}
		}
	}
	
	newMap(){
		var map = [];
		for (var i = 0; i < this.width; ++i){
			map.push([]);
			for (var j = 0; j < this.height; ++j){
				var newTile = new Tile;
				map[i].push(newTile);
			}
		}
		
		this.createRooms(map);
		//var newRoom = new Rect(1, 1, 3, 3);
		//this.createRoom(map, newRoom)
		return map;
	}
	
	log(){
		for (var i = 0; i < this.width; ++i){
			var drawString = "";
			for (var j = 0; j < this.height; ++j){
				drawString += this.MAP[i][j].str();
			}
			console.log(drawString);
		}
	}
	
	isBlocked(x, y){
        return this.MAP[x][y].blocked;
	}
    
    setObject(x, y, obj){
        this.MAP[x][y] = obj;
	}
        
    getObject(x, y){
        return this.MAP[x][y];
	}
	
	setUp(){
		for (var i = 0; i < this.width; ++i){
			var tileTr = this.tr.cloneNode(false);
			tileTr.className = "blockRow";
			this.mainTable.appendChild(tileTr);
			for (var j = 0; j < this.height; ++j){
				var tileTd = this.td.cloneNode(false);
				tileTd.className = "block " + (this.MAP[i][j].getClassName());
				tileTd.setAttribute("data-coords", i + ":" + j);
				tileTr.appendChild(tileTd);
			}
		}
	}
	
	update(){
		while (this.mainTable.firstChild) {
			this.mainTable.firstChild.remove();
		}
		for (var i = 0; i < this.width; ++i){
			for (var j = 0; j < this.height; ++j){
				this.MAP[i][j].style = "block " + (this.MAP[i][j].getClassName());
			}
		}
		this.setUp();
	}
	
	getObject(i, j){
		return this.MAP[i][j];
	}
	
}

function main(){
	var mainTable = document.createElement("table");
	var map = new Map(20, 50, 21, 2, 6, mainTable);
	var goal = new Goal(map);
	var actor = new Object(map, goal);
	var ai = new Ai(map, actor);
	document.body.appendChild(mainTable);
	mainTable.id = "mainTable";
	var [actorX, actorY] = map.getActorCoords();
	actor.setUp(actorX, actorY);
	map.setUp();
	mainTable.addEventListener('click', goTo);
	
	function moveAndUpdate(){
		map.update();
		ai.move();
	}
	
	function mainCycle(delay) {
		var savedThis = this;
		var interval = setInterval(function() {
			if (!goal.isPlaced){
				
				clearInterval(interval);
			}
			moveAndUpdate.apply(savedThis);
		}, delay);
	};
	
	function placeGoal(x, y){
		var tile = map.getObject(x, y);
		if (!tile.blocked){
			goal.place(x, y);
		}
	}
	
	function goTo(e){
		var target = e.target;
		var call = target.getAttribute('data-coords');
		if (call !== 'undefined' && call !== null){
			var [x, y] = call.split(':');
			placeGoal(x, y);
			if (goal.isPlaced){
				ai.createPathTo(x, y);
				if (ai.havePath){
					mainCycle(100);
				}
			}
		}
	}
}

main();