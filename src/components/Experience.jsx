export default function Experience(prop){
     return(
<div className="Experience">
    <input onChange={e=>(prop.experienceInfo(pre=>({...pre,company:e.target.value})))} />
    <input onChange={e=>(prop.experienceInfo(pre=>({...pre,position:e.target.value})))} />
    <input onChange={e=>(prop.experienceInfo(pre=>({...pre,startDate:e.target.value})))} />
    <input onChange={e=>(prop.experienceInfo(pre=>({...pre,finalDate:e.target.value})))} />
</div>
  )
}