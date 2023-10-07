const getData=async()=>{
  const respones = await fetch('http://localhost:8000/tableviews', {
    method: "GET",
    headers: { "Content-Type": "application/json"}
  })
  const dat = await respones.json()
  document.getElementById("viewData").innerHTML= dat?.rows?.map((item,index)=>{
    return(
      `<tr key=${index}>
      <td>${item.username}</td>
      <td>${item.email}</td>
      <td>${item.place}</td>
      <td>${item.job}</td>
      <td>${item.phoneno}</td>
      </tr>`
    )
  })
console.log(dat?.rows);
}
getData()


const onSubmit=async(event)=>{
  event.preventDefault()
  const data = {
    username:event.target.elements.username.value,
    email:event.target.elements.email.value,
    Place:event.target.elements.Place.value,
    jobname:event.target.elements.jobname.value,
    phone:event.target.elements.phone.value
  }
  // console.log(data);
  const respones = await fetch('http://localhost:8000/enterthedatas', {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(data)
  })
  console.log(respones);
  if(respones.ok){
    window.location.assign("../public/views.html")
    
getData()
  }else{
    alert("error")
  }
  
  // const dat = await res.json()

    // console.log(event.target.elements.name.value);
    // console.log(dat); 
}