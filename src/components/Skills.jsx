export default function Skills(prop){
    return(
        <div className="section">
            <h3 className="section-title">Skills</h3>
            
            <div className="input-group">
                <input 
                    className="form-input"
                    type="text"
                    placeholder="Skill One"
                    onChange={e=>(prop.skills(pre=>({...pre,skillone:e.target.value})))} 
                />
            </div>
            
            <div className="input-group">
                <input 
                    className="form-input"
                    type="text"
                    placeholder="Skill Two"
                    onChange={e=>(prop.skills(pre=>({...pre,skilltwo:e.target.value})))} 
                />
            </div>
            
            <div className="input-group">
                <input 
                    className="form-input"
                    type="text"
                    placeholder="Skill Three"
                    onChange={e=>(prop.skills(pre=>({...pre,skillthree:e.target.value})))} 
                />
            </div>
        </div>
    )
}