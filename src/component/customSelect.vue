<!-- CustomSelect.vue -->
<template>
  <div class="custom-select" @click="toggleDropdown" ref="selectContainer">
    <div class="select-trigger">
      <span>{{ selectedLabel || placeholder }}</span>
      <i class="arrow" :class="{ open: showDropdown }"></i>
    </div>
    <ul class="select-dropdown" v-show="showDropdown">
      <li 
        v-for="option in options" 
        :key="option.value"
        @click="selectOption(option)"
        :class="{ selected: modelValue === option.value }"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: '请选择'
    }
  },
  data() {
    return {
      showDropdown: false
    }
  },
  computed: {
    selectedLabel() {
      const selected = this.options.find(option => option.value === this.modelValue);
      return selected ? selected.label : '';
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectOption(option) {
      this.$emit('update:modelValue', option.value);
      this.showDropdown = false;
    },
    handleClickOutside(event) {
      if (this.$refs.selectContainer && !this.$refs.selectContainer.contains(event.target)) {
        this.showDropdown = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
}

.select-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: border-color 0.3s ease;
  min-height: 46px;
}

.select-trigger:hover {
  border-color: #667eea;
}

.select-trigger:focus-within {
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
}

.arrow {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #999;
  transition: transform 0.3s ease;
}

.arrow.open {
  transform: rotate(180deg);
}

.select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
  max-height: 200px;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  list-style: none;
}

.select-dropdown li {
  padding: 0.75rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.select-dropdown li:hover {
  background-color: #f0f5ff;
}

.select-dropdown li.selected {
  background-color: #e0e9ff;
  font-weight: 600;
}
</style>