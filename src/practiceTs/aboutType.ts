import type { type } from "os";

//基本类型 string number boolean Array[] any
let str: string = ''
let num: number = 1
let result: boolean = true;
let strArr: Array<number> = [1,2]
let obj:any = null;
//类型
type Skill = {
    skillname:string;
}
type Person = {
    name:string;
}
let braver :Person ={
    name:'咕噜咕噜'
} 
//函数
function heal(hp:number,power?:number):number{
    if(power){
        console.log(hp+power)
        return hp+power;
    }else{
        console.log(hp+10)
        return hp+10;
    }
}
function talk(words:number|string){
    if(typeof words === 'number'){
    }else{
        console.log(words)
    }
}   
const skills:Array<Skill> = [{skillname:"大贤者"}, {skillname:"燃耗"}, {skillname:"冻结"},{skillname:"闪电"}];

skills.forEach(function (skill) {
    console.log(skill.skillname.toUpperCase());
});

function useSkill(braver:Person,skill:Skill){
    console.log(`${braver.name}使用了${skill.skillname}`)
}
//使用函数
let hp = heal(1,10);
useSkill(braver,skills[0])
talk('我是萌王')
