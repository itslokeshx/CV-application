export default function Skills(prop){
    return(

        <div className="Skill">
        <input onChange={e=>(prop.skills(pre=>({...pre,skillone:e.target.value})))} />
        <input onChange={e=>(prop.skills(pre=>({...pre,skilltwo:e.target.value})))} />
        <input onChange={e=>(prop.skills(pre=>({...pre,skillthree:e.target.value})))} />


        </div>
    )
}