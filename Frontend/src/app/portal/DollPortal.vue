<style scoped src="./DollPortal.css"></style>
<template>
    <div class='portal'>
        <DollSelect :options='options' />
        <DollButton
            :disabled='false'
            @click='increment'
        >
            {{ count }}
        </DollButton>
        <DollButton
            :disabled='true'
            @click='increment'
        >
            {{ count }}
        </DollButton>
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


