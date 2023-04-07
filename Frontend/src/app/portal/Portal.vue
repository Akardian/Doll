<style scoped src="./Portal.css"></style>
<template>
    <div class="portal">
        <DollSelect :options="options"></DollSelect>
        <DollButton @click="increment" :disabled="false"> {{ count }}</DollButton>
        <DollButton @click="increment" :disabled="true"> {{ count }}</DollButton>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { SelectOption } from "../../components/doll-select/SelectOption"

let count = ref(0)

function increment() {
    console.log(count)
    count.value++
}

const options: SelectOption[] = []
options.push(new SelectOption('One'))
options.push(new SelectOption('Two'))

</script>


