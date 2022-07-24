let num=prompt ('Give me a three-digit number, please.');
console.log(num);
if (num[0] == num[1] || num[0] == num[2] || num[1] == num[2]){
    alert(`this number has identical digits`);
    }
  else {
      alert(`this number hasn't identical digits`)
  }