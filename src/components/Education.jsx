export default function Education(prop){
  return(
    <div className="section">
      <h3 className="section-title">Education</h3>
      
      <div className="input-group">
        <input 
          className="form-input"
          type="text"
          placeholder="School / University Name"
          onChange={e=>(prop.educationInfo(pre=>({...pre,school:e.target.value})))} 
        />
      </div>
      
      <div className="input-group">
        <input 
          className="form-input"
          type="text"
          placeholder="Degree / Course"
          onChange={e=>(prop.educationInfo(pre=>({...pre,degree:e.target.value})))} 
        />
      </div>
      
      <div className="input-group">
        <input 
          className="form-input"
          type="text"
          placeholder="Start Date"
          onChange={e=>(prop.educationInfo(pre=>({...pre,EdustartDate:e.target.value})))} 
        />
      </div>
      
      <div className="input-group">
        <input 
          className="form-input"
          type="text"
          placeholder="End Date"
          onChange={e=>(prop.educationInfo(pre=>({...pre,EduendDate:e.target.value})))} 
        />
      </div>
    </div>
  )
}