const {WebSocketServer} = require("ws");

const server = new WebSocketServer({
	port: 5000
})


server.on("connection", (socket) => {
	socket.on("message",  (data) => {
		console.log(`Client Message: ${data}`)
		let new_data = JSON.parse(data);
		
		console.log(new_data.chat_message);
		/*
			socket.send(`<div id="chat_box" hx-swap-oob="beforeend"><p>Client Said: ${new_data.chat_message}</p></div>`);
		*/
		setInterval(() => {
			socket.send(`<div id="chat_box" hx-swap-oob="beforeend"><p>Client Said: ${new_data.chat_message}</p></div>`);
		}, 1000)
	})
})
