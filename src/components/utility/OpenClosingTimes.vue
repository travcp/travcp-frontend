<template>
    <div>
        <div v-for="(day, index) in days" :key="index" class="input-row" :class="inputContainerClass">
            
            <div class="row">
                <div class="col-3">
                    <label :for="day.day">{{ day.day }}</label>
                </div>
                <div class="col-3">
                    <input type="text" :data-day-name="day.day+'open_time'" :data-day="day.day" name="openings[]" :value="day.open_time" :class="inputClass" placeholder="Opening hour" @input="updateTimes($event, day, index)">
                </div>
                <div class="col-3">
                    <input type="text" :data-day="day.day" :data-day-name="day.day+'close_time'" name="closings[]" :value="day.close_time" :class="inputClass" placeholder="Closing hour" @input="updateTimes($event, day, index)">
                </div>
                <div class="col-3">
                    <label><input type="checkbox" :data-day-name="day.day+'closed'" :data-day="day.day" name="" :checked="day.closed==true" @input="updateTimes($event, day, index)">Closed</label>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: "OpenClosingTimes",
    data(){
        return {
        }
    },
    props: {
        inputContainerClass: {
            type: String,
            default: "form-group"
        },
        inputClass: {
            type: String,
            default: "form-control"
        },
        days: 
        {
            type: Array, 
            default: function() {
                return [
                    {day: "Monday", open_time : "", close_time : "", closed: false},
                    {day: "Tuesday", open_time : "", close_time : "", closed: false},
                    {day: "Wednesday", open_time : "", close_time : "", closed: false},
                    {day: "Thursday", open_time : "", close_time : "", closed: false},
                    {day: "Friday", open_time : "", close_time : "", closed: false},
                    {day: "Saturday", open_time : "", close_time : "", closed: false},
                    {day: "Sunday", open_time : "", close_time : "", closed: false},
                
                ]
            }
        }
    },
    methods: {
        updateTimes(e, day, index){
            let targetedDay = this.days[index];
            let targetedDayStartTime = e.target.dataset.day + "open_time";
            let targetedDayCloseTime = e.target.dataset.day + "close_time";
            let targetedDayClosedStatus = e.target.dataset.day + "closed";
            
            let updatedDay = {
                day: targetedDay.day,
                open_time: document.querySelector('[data-day-name="' + targetedDayStartTime + '"]').value,
                close_time: document.querySelector('[data-day-name="' + targetedDayCloseTime + '"]').value,
                closed: document.querySelector('[data-day-name="' + targetedDayClosedStatus + '"]').checked ? true : false,
            }
            console.log(document.querySelector('[data-day-name="' + targetedDayClosedStatus + '"]').checked)
            this.days[index] = updatedDay;
            
            this.$emit('input', this.days);
            
        }
    }
}
</script>

<style scoped>
    
</style>
