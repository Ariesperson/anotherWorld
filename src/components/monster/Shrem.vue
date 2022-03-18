<template>
  <main>
    <div class="jiula">
      <div>
        <img @click="attck" :src="Shrem.picture" />
        <div>魔物名称：{{ Shrem.name }}</div>
        <div>魔物种族：{{ Shrem.race }}</div>
        <div>魔物等级：{{ Shrem.level }}</div>
        <div>魔物生命值：{{ Shrem.vitality }}</div>
        <div>是否敌对：{{ Shrem.hostile ? "是" : "否" }}</div>
        <div>是否危险：{{ isdanger }}</div>
        <button @click="attck()">攻击勇者</button>
      </div>
      <div>
        <img @click="attck" :src="person.picture" />
        <div>勇者名称：{{ person.name }}</div>
        <div>勇者种族：{{ person.race }}</div>
        <div>勇者等级：{{ person.level }}</div>
        <div>勇者生命值：{{ person.vitality }}</div>
        <div>勇者攻击力：{{ person.aggressivity }}</div>
        <button @click="aggresition(Shrem.name)">攻击史莱姆</button>
        <button @click="rest()">打坐</button>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { reactive, ref, computed, onMounted } from "vue";
// import Weapon from "../../monsterFactory/monster.ts";
interface Weapon {
  name: string;
  ag: number;
}
const person = reactive({
  name: "咕噜咕噜",
  race: "人族",
  picture:
    "https://img.dmallcdn.com/dshop/202203/13f1b4ee-f34d-442d-97ce-17ceab3d42be",
  level: 1,
  hostile: false,
  aggressivity: 1,
  DefensivePower: 2,
  vitality: ref(10),
  skill: [{ skillNum: ref(1), skillName: ref("治疗术") }],
  EXP: 0,
});
const Shrem = reactive({
  name: "史莱姆",
  race: "软体魔物",
  picture:
    "https://img.dmallcdn.com/dshop/202203/d28dee44-8771-43b8-bccb-1ba8e3337b10",
  level: 1,
  hostile: false,
  aggressivity: 1,
  DefensivePower: 1,
  vitality: 30,
  skill: [{ skillNum: ref(1), skillName: ref("撕咬") }],
});
onMounted(() => {
  wearWeapon({
    name: "木剑",
    ag: 10,
  });
});
//穿上武器
function wearWeapon(weapon: Weapon) {
  person.aggressivity += weapon.ag;
}

//魔物攻击
function attck() {
  let str = `${Shrem.name}攻击了咕噜咕噜，对您造成伤害${Shrem.aggressivity}`;
  person.vitality -= Shrem.aggressivity;
  alert(str);
}
//勇者攻击
function aggresition(name: string): boolean {
  Shrem.vitality -= person.aggressivity;
  let str = `${name}受到了咕噜咕噜的攻击，生命值-${person.aggressivity}，当前生命值${Shrem.vitality}`;
  alert(str);
  return true;
}
//治疗术
function Therapy() {
  Shrem.vitality = Shrem.vitality + Shrem.skill[0].skillNum;
  let str = `${Shrem.name}施展了${Shrem.skill[0].skillName}，生命值恢复${Shrem.skill[0].skillNum}，当前生命值${Shrem.vitality}`;
  alert(str);
}
//判断魔物是否危险
const isdanger = computed(() => {
  return person.DefensivePower > Shrem.aggressivity ? "No" : "Yes";
});
//打坐恢复生命值
function rest(seconds?: number) {
  if (seconds) {
    person.vitality += seconds * 0.5;
    if (person.vitality > 10) {
      person.vitality = 10;
    }
    alert(`${person.name}打坐休息了${seconds}`);
  } else {
    alert(`${person.name}打坐休息了10s`);
    person.vitality += 5;
    if (person.vitality > 10) {
      person.vitality = 10;
    }
  }
}
</script>
<style>
.jiula {
  display: flex;
  align-items: center;
}
</style>
