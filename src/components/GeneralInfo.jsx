export default function GeneralInfo(prop){
    
  return(
<div className="GeneralInfo">
    <input onChange={e=>(prop.generalInfo(pre=>({...pre,name:e.target.value})))} />
    <input onChange={e=>(prop.generalInfo(pre=>({...pre,mail:e.target.value})))} />
    <input onChange={e=>(prop.generalInfo(pre=>({...pre,address:e.target.value})))} />
    <input onChange={e=>(prop.generalInfo(pre=>({...pre,summary:e.target.value})))} />
</div>

  )

}