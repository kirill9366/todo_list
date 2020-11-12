let todo_list = [];
let id = 0;
function add_todo_record(){
	let new_todo_text = document.getElementsByClassName("todo_add__input")[0].value;
	if (new_todo_text.length > 30){
		return alert(`Пожалуйста укоротите строку на ${new_todo_text.length - 30} символов`)
	};
	todo_list.push({"text":new_todo_text, "id":id});
	id += 1;
	update_list();
};
function update_list(){
	let todo_list_div = document.getElementsByClassName("todo_list")[0];
	todo_list_div.innerHTML = ``;
	let todo_list_text = ``
	for (todo_id in todo_list){
		let id = todo_list[todo_id]["id"]
		todo_list_text +=
			`<div class="todo_record" id="${id}">
				<button class="todo_record__del" onclick="del_todo_record(${id})">Delete</button>
				<button class="todo_record__edit" onclick="edit_todo_record(${id})">Edit</button>
				<p class="todo_record__text">${todo_list[todo_id]["text"]}</p>
			</div>`;
		};
		todo_list_div.innerHTML = todo_list_text;

};
function del_todo_record(id){
	let new_arr = Array();
	for (todo_id in todo_list){
		if (todo_list[todo_id]["id"] === id){
			continue
		};
		new_arr.push(todo_list[todo_id]);
	};
	todo_list = new_arr;
	update_list()
};
function edit_todo_record(id){
	let todo_record = document.getElementById(id);
	todo_record.innerHTML = 
	`		<div class="todo_add">
			<input type="text" class="todo_add__input" style="width:360px;">
			<button class="todo_add__button" onclick="update_todo_record()">edit</button>
		</div>
	`;
};
update_list()