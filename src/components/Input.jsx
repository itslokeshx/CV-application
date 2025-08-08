export default function Input(){

  function sendData(){
    
    const name = formData.get("username")
    alert(name)
  
  
  }


    return (
        <form onSubmit={sendData}

        >

            <input
            type="text"
            defaut="loki"
            placeholder="your name here"
            name="username"
            onChange={sendData}
            >

            </input>
            <button type="submit">Submit</button>
        </form>
    )
}