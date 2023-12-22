function getFormvalue() {
    //Write your code here
	let name=document.querySelectorAll("form>input");
	alert(`${name[0].value} ${name[1].value}`);
}