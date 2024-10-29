


let height = +prompt(`키가 몇cm입니까?`);
if (height >=140) {
  let age = +prompt(`나이가 몇살입니까?`);
    if (age>=7) {
      alert(`놀이기구에 탑승할 수 있습니다.`);    
    }
    else{
      alert(`나이가 적어서 놀이기구에 탑승할 수 없습니다`);
    }
}
else {
  alert(`키가 작아서 놀이기구에 탑승할 수 없습니다.`);  
}