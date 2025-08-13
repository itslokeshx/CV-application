export default function Education(prop){
     return(
<div className="Education">
    <input onChange={e=>(prop.educationInfo(pre=>({...pre,school:e.target.value})))} />
    <input onChange={e=>(prop.educationInfo(pre=>({...pre,degree:e.target.value})))} />
    <input onChange={e=>(prop.educationInfo(pre=>({...pre,EdustartDate:e.target.value})))} />
    <input onChange={e=>(prop.educationInfo(pre=>({...pre,EduendDate:e.target.value})))} />
</div>
  )
}