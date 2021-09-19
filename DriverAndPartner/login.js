function openForm(id) {
	if (id == "signupForm") closeForm("loginForm");
	else closeForm("signupForm");
	document.getElementById(id).style.display = "block";
	document.getElementById("main-container").classList.add("blur");
}
function closeForm(id) {
	document.getElementById(id).style.display = "none";
	document.getElementById("main-container").classList.remove("blur");
}
var last_question;

function toggleElement(id) {
	if (last_question != undefined) {
		console.log(document.getElementById(id));
		document.getElementById(last_question).classList.toggle("dis_none");
		document
			.getElementById(last_question + "Col")
			.classList.toggle("colBlue");
	}
	if (document.getElementById(id).style.display == "none") {
		element.classList.toggle("dis_none");
		console.log(id);
		document.getElementById(id + "Col").style.color = "blue";
	} else {
		document.getElementById(id).classList.toggle("dis_none");
		document.getElementById(id + "Col").classList.toggle("colBlue");
	}
	last_question = id;
}

function redirect() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("psw").value;
	var data = JSON.parse(localStorage.getItem("logData"));
	for (var i = 0; i < data.length; i++) {
		if (data[i][0] == email && data[i][1] == password) {
			// console.log(1)
			localStorage.setItem("currentuser", JSON.stringify(data[i]));
			return true;
		}
	}
	return false;
}
function validateSignIn() {
	const formdata = {
		password: document.getElementById("psw1").value,
		email: document.getElementById("emailSign").value,
		fullName: document.getElementById("fullNameSign").value,
	};
	if (formdata.password !== document.getElementById("psw2").value) {
		return alert("Passwords do not match");
	}
	body = JSON.stringify(formdata);
	fetch(`http://localhost:2345/user/signup`, {
		method: "POST",
		body: body,
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then((res) => {
			if (res.status !== 200) {
				alert("Email already Present");
				return;
			}

			alert("Success Account Created");
			closeForm("signupForm");
			return res.json();
		})
		.then((res) => {
			const dummyData = {
				userId: res._id,
				details: [
					{
						orderId: "405-6414251-4169918",
						transactionType: "Debit",
						vechicalName: "TATA ACE",
						driverName: "DummyData1",
						status: "completed",
						amount: 1035,
						date: "18 / 06 / 2021",
					},
					{
						orderId: "405-3457491-6094501",
						transactionType: "Credit",
						vechicalName: "TATA ACE",
						driverName: "DummyData2",
						status: "live",
						amount: 668,
						date: "405-3457491-6094501",
					},
					{
						orderId: "405-8312872-4451566",
						transactionType: "Credit",
						vechicalName: "3 Wheeler",
						driverName: "DummyData3",
						status: "live",
						amount: 8068,
						date: "28 / 02 / 2021",
					},
					{
						orderId: "405-3181978-4558710",
						transactionType: "Debit",
						vechicalName: "3 Wheeler",
						driverName: "DummyData4",
						status: "live",
						amount: 438,
						date: "20 / 04 / 2021",
					},
				],
			};

			fetch(`http://localhost:2345/user/${res._id}`, {
				method: "POST",
				body: JSON.stringify(dummyData),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((res) => res.json())
				.then((res) => console.log(res));
		})
		.catch((err) => {
			alert(err.message);
		});
}
function validateMyForm() {
	const formdata = {
		password: document.getElementById("psw").value,
		email: document.getElementById("email").value,
	};
	body = JSON.stringify(formdata);
	fetch(`http://localhost:2345/user/auth/login`, {
		method: "POST",
		body: body,
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then((res) => {
			//console.log(res)
			return res.json();
		})
		.then((res) => {
			if (!res.error) {
				console.log(res);
				localStorage.setItem("currentuser", JSON.stringify(res));
				window.location.href = `./userOrderHistory.html`;
			}
			if (res.error) {
				alert("Invalid LogIn credentials");
			}
		})
		.catch((err) => {
			console.log(err.message);
		});
}
document
	.getElementById("signupForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
	});
document
	.getElementById("loginForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
	});
