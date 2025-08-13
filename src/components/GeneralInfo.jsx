export default function GeneralInfo(prop){
    
  return(
    <div className="section">
      <h3 className="section-title">General Info</h3>
      
      <div className="input-group">
        <input 
          className="form-input"
          type="text"
          placeholder="Full Name"
          onChange={e=>(prop.generalInfo(pre=>({...pre,name:e.target.value})))} 
        />
      </div>
      
      <div className="input-group">
        <input 
          className="form-input"
          type="email"
          placeholder="Email"
          onChange={e=>(prop.generalInfo(pre=>({...pre,mail:e.target.value})))} 
        />
      </div>
      
      <div className="input-group">
        <input 
          className="form-input"
          type="text"
          placeholder="Address"
          onChange={e=>(prop.generalInfo(pre=>({...pre,address:e.target.value})))} 
        />
      </div>
      
      <div className="input-group">
        <textarea 
          className="form-input form-textarea"
          placeholder="Write a short professional summary..."
          onChange={e=>(prop.generalInfo(pre=>({...pre,summary:e.target.value})))}
        />
      </div>
    </div>
  )
}