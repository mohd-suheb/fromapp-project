import React, { useState } from 'react'

const App = () => {

  // function firstchangehandler(event){
  //   console.log("printing first");
  //   console.log(event.target.value);
  // }

  // function lastchangehandler(event){
  //   console.log("printing last");
  //   console.log(event.target.value);
  // }

  const[formdata, setformdata] = useState({
    firstname:"", lastname: "", Comments : "",  isvisible:  false,
    mode: "", favcar: " ", name:""

  });


  function changehandler(event){
    const{name, value, checked, type} = event.target 
    setformdata(prevData =>{
      return{
        ...prevData,
        [name]: type === "checkbox"? checked: value
      }
    })
  }
  function submithandler(event){
    event.preventDefault();
    console.log("priti all data");
    console.log(formdata);

  }
  return (
    <div>

<form onSubmit={submithandler}>
  
<input
type='text'
placeholder='first name'
onChange={changehandler}
name = "firstname"
value={formdata.firstname}

/>
<br></br>
<br></br>

<input
type='text'
placeholder='last name'
onChange={changehandler}
name = "lastname"
value={formdata.lastname}

/>

<br></br>
<input

type='email'
placeholder='enter your email'
onChange={changehandler}
name= 'email'
value={formdata.email}

/>
<br></br>
<textarea
placeholder=' enter your text'
onChange={changehandler}
name='comments'
value={formdata.Comments}
/>

<br></br>
<br></br>
<input 
type='checkbox'
onChange={changehandler}
name='isvisible'
id='isvisible'
checked = {formdata.isvisible}
/>


<label htmlFor='isvisible'>am i visible</label>

<br></br>
<br></br>

<fieldset>
  <legend>mode:</legend>

<input
type='radio'
onChange={changehandler}
name='mode'
value= "online-mode"
id='online-mode'
checked = {formdata.mode === "online-mode"}

/>

<label htmlFor='online-mode'>online-mode</label>




<input
type='radio'
onChange={changehandler}
name='mode'
value= "offline-mode"
id='offline-mode'
checked = {formdata.mode === "offline-mode"}

/>

<label htmlFor='offline-mode'>onffine-mode</label>

</fieldset>
<label htmlFor='favcar'>tell me your name favcar</label>
<select
 name = "favcar"
 id='favcar'
 value={formdata.favcar}
 onChange={changehandler}

>
  <option value= "fortuer">fortuer</option>
  <option value= "fortuer">fortuer</option>
  <option value= "fortuer">fortuer</option>
  <option value= "fortuer">fortuer</option>
  <option value= "fortuer">fortuer</option>

</select>

<br/>
<br/>

{/* <input type='submit' value= "submit"/> */}

<button>submit</button>

</form>



    </div>
  )
}

export default App