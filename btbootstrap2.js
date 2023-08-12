function validateForm() {
    let title= document.getElementById("title").value;
    let content= document.getElementById("content").value;
    if (title=="") {
        alert("title is required");
        return false;
    }
   else if (content=="") {
        alert("content is required");
        return false;
    }
    return true;
}
function showData() {
    let peopleList;
    if (
        localStorage.getItem("peopleList")==null ){
        peopleList=[];
    }
else {
    peopleList=JSON.parse(localStorage.getItem("peopleList"))  
}
peopleList.push({
    title:tile,
    content:content,
    });
    localStorage.setItem("peopleList",JSON.stringify(peopleList));
    showData();
    document.getElementById("title").value="";
    document.getElementById("content").value="";
}