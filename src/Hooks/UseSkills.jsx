import { useEffect, useState } from "react";

const UseSkills = () => {
    const [Skills,setSkills]=useState()

    useEffect(()=>{
        fetch('fakeSkill.json')
        .then(res => res.json())
        .then(data => setSkills(data))
    },[])

    return [Skills]
};

export default UseSkills;