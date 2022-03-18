<template>
  <main>
    <img @click="attck" :src="Shrem.picture" />
    <div>魔物名称：{{ Shrem.name }}</div>
    <div>魔物种族：{{ Shrem.race }}</div>
    <div>魔物等级：{{ Shrem.level }}</div>
    <div>是否敌对：{{ Shrem.hostile ? "是" : "否" }}</div>
    <button @click="aggresition">攻击史莱姆</button>
  </main>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
const Shrem = reactive({
  name: "史莱姆",
  race: "软体魔物",
  picture:
    "https://img.dmallcdn.com/dshop/202203/d28dee44-8771-43b8-bccb-1ba8e3337b10",
  level: 1,
  hostile: false,
  aggressivity: 1,
  DefensivePower: 1,
  vitality: 10,
});
const myAggressivity = ref(1);
function attck() {
  let str = `${Shrem.name}攻击了咕噜咕噜，对您造成伤害${Shrem.aggressivity}`;
  alert(str);
}

const refShrem = ref({
  name: "史莱姆",
  race: "软体魔物",
  picture:
    "https://img.dmallcdn.com/dshop/202203/d28dee44-8771-43b8-bccb-1ba8e3337b10",
  level: 1,
  hostile: false,
  aggressivity: 1,
  DefensivePower: 1,
  vitality: 10,
});

function aggresition() {
  refShrem.value.vitality--;
  let str = `${Shrem.name}受到了咕噜咕噜的攻击，生命值-${myAggressivity.value}，当前生命值${refShrem.value.vitality}`;
  alert(str);
  setTimeout(() => {
    Therapy();
  }, 3000);
}

const therapySkill = { skillNum: ref(1), skillName: ref("治疗术") };
function Therapy() {
  refShrem.value.vitality =
    refShrem.value.vitality + therapySkill.skillNum.value;
  let str = `${Shrem.name}施展了${therapySkill.skillName.value}，生命值恢复${therapySkill.skillNum.value}，当前生命值${refShrem.value.vitality}`;
  alert(str);
}
// defineProps<{
//   Infomation: string;
// }>();
</script>
