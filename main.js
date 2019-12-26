function solve() {
    document.getElementById("button").addEventListener("click", function(event){
        event.preventDefault()              ////tova e za da ne se refreshva kato se natisne submit butona
    });

    document.getElementById('button').addEventListener('click',ddo);
    
}

function ddo() {
    let students = document.getElementById('input').value.split('\n');
    let arrayWithObj = [];
    students.forEach(element => {
        let array = element.split(' ');
        let obj = {};
        obj["first name"] = array[0];
        obj["second name"] = array[1];
        obj["grade"] = array[2];
        arrayWithObj.push(obj);
    });

    let textarea = document.getElementById('result');
    let resultOfStudents = "Students are: ";
    resultOfStudents += arrayWithObj.map(x => x["first name"] + ' ' +  x["second name"]).join(', ');
    resultOfStudents += '\n';
    resultOfStudents += 'Average grade is: ';
    resultOfStudents += (arrayWithObj.map(x => x["grade"]).reduce((a, b) => +a + +b)/arrayWithObj.length).toFixed(2);
    textarea.value = resultOfStudents;
}
