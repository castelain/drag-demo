let dragged;
let draggedParentId;
let unDraggedParentId;
const activedBgColor = "rgba(96, 199, 0, .4)";
const normalBgColor = "lightsteelblue";
const btnBgColor = "skyblue";

function handleDragStart(event) {
	dragged = event.target;
	draggedParentId = event.target.parentNode.id;
	unDraggedParentId = draggedParentId === "left-box" ? "right-box" : "left-box";
	document.getElementById(unDraggedParentId).style.backgroundColor = activedBgColor;
	event.dataTransfer.dropEffect = "move";
	event.target.style.opacity = 0.5;
	console.log('drag start...');
}

function handleDrag(event) {
	console.log('drag...');
}

function handleDragEnter(event) {
	console.log('drag enter: ', event.dataTransfer);
}

function handleDragEnd(event) {
	event.target.style.opacity = 1;
	event.target.style.backgroundColor = 'white';
	document.getElementById(unDraggedParentId).style.backgroundColor = normalBgColor;
	document.getElementById(draggedParentId).style.backgroundColor = normalBgColor;
	console.log('drag end...');
}

function handleDragOver(event) {
	event.preventDefault();
	event.dataTransfer.dropEffect = 'move';
	event.target.style.backgroundColor = 'rgba(96, 199, 0, .4)';
}

function handleDrop(event) {
	event.preventDefault();
	dragged.parentNode.removeChild(dragged);
	event.target.appendChild(dragged);
	event.target.style.backgroundColor = btnBgColor;
	event.target.style.opacity = 1;
	document.getElementById(unDraggedParentId).style.backgroundColor = normalBgColor;
	document.getElementById(draggedParentId).style.backgroundColor = normalBgColor;
	[unDraggedParentId, draggedParentId] = [draggedParentId, unDraggedParentId];
}