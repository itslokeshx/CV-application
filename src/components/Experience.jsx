export default function Experience(prop){
  return(
    <div className="section">
      <h3 className="section-title">Experience</h3>
      
      <div className="input-group">
        <input 
          className="form-input"
          type="text"
          placeholder="Company Name"
          onChange={e=>(prop.experienceInfo(pre=>({...pre,company:e.target.value})))} 
        />
      </div>
      
      <div className="input-group">
        <input 
          className="form-input"
          type="text"
          placeholder="Job Title / Role"
          onChange={e=>(prop.experienceInfo(pre=>({...pre,position:e.target.value})))} 
        />
      </div>
      
      <div className="input-group">
        <input 
          className="form-input"
          type="text"
          placeholder="Start Date"
          onChange={e=>(prop.experienceInfo(pre=>({...pre,startDate:e.target.value})))} 
        />
      </div>
      
      <div className="input-group">
        <input 
          className="form-input"
          type="text"
          placeholder="End Date"
          onChange={e=>(prop.experienceInfo(pre=>({...pre,finalDate:e.target.value})))} 
        />
      </div>
    </div>
  )
}