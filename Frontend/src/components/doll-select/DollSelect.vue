<style scoped src="./DollSelect.css"></style>

<template>
    <label>
        <slot>
        </slot>
    </label>

    <div class="select">
        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option v-for="option in props.options" :value="option.name">
                {{ option.name }}
            </option>
        </select>
        <span class="focus"></span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SelectOption } from './SelectOption'

interface Select {
    options: SelectOption[]
}

const props = defineProps<Select>()
const selected = ref('')
</script>