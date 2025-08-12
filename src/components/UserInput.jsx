export default function UserInput(prop){


    return (
      <>
      <input onChange={(e)=>(prop.liveinput(pre=>({...pre,name:e.target.value})))} />
      </>
    )
}