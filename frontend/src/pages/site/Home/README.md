Card-n oldugu componentin icinde bu state-ler yaradilir !

const [inpVal, setInpVal] = useState("")
const [sortBy, setSortBy] = useState(null)



Card-n yuxarisinda bu button-lar yazilir !

<input value={inpVal}  onChange={(e)=>{
  setInpVal(e.target.value)
}} type="text" placeholder="Search " />
<button onClick={()=>setSortBy({field:"title",asc:true})} className="btn btn-primary mx-3  ">A-Z</button>
<button onClick={()=>setSortBy({field:"title",asc:false})} className="btn btn-primary mx-3 ">Z-A</button>
<button onClick={()=>setSortBy({field:"price",asc:false})} className="btn btn-primary v">Low To High</button>
<button onClick={()=>setSortBy({field:"price",asc:true})} className="btn btn-primary mx-3 ">High To Low</button>



Card-n map olundugu yerde data ile map-n arasina bunlar yazilir!

.filter(x=>x.title.toLowerCase().includes(inpVal.toLowerCase()))
            .sort((a,b)=>{
              if(!sortBy){
                  return 0
              }else if(sortBy.asc==true){
                  return (a[sortBy.field] > b[sortBy.field]) ? 1 : ((b[sortBy.field] > a[sortBy.field]) ? -1 : 0)
              }
              else if(sortBy.asc==false){
                return (a[sortBy.field] < b[sortBy.field]) ? 1 : ((b[sortBy.field] < a[sortBy.field]) ? -1 : 0)

            }
})
            