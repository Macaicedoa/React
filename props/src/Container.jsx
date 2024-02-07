import { useState } from "react"

function Container({title,children}) {

    const [collapsed,setCollapsed] = useState(false)

    function handleClickToCollapse() {
        setCollapsed((c)=>!c)
    }

  return (
    <div>
        <div className="title" onClick={handleClickToCollapse}>{title}</div>
        <div>{!collapsed && children}</div>       
    </div>
  )
}

export default Container