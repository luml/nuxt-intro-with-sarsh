import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let machines = {
    last_serviced: 'Aug 2020',
    condition: 'working'
}

export default new Vuex.Store({
    state: {
        machineName: 'bender',
        supply: 5,
        isRestocking: false,
        isDispensing: false,
        isCheckingMachine: false,
    },
    actions: {
        fetchFromInventory({commit}) {
            // ping the inventory to check if there is inventory
            // assuming there is commit the action to stockItems
            // remember that we're going to toggle the isRestocking state
            commit('isRestocking', true)
            setTimeout(() => {
                commit('isRestocking', false)
                commit('stockItems')
            }, 3000)
        },
        dispense({commit}) {
            commit('isDispensing', true)
            setTimeout(() => {
                commit('dispense')
                commit('isDispensing', false)
            }, 3000)
        },
        // When to check machine state
        checkMachineState({state, commit}) {
            commit('isCheckingMachine', true)
            return new Promise(resolve => {
                setTimeout(() => {
                    commit('isCheckingMachine', false)
                    resolve(machines[state.machineName])
                }, 3000)
            })
        },
    },
    getters: {
        isSupplyLow: state => state.supply < 10
    },
    mutations: {
        isRestocking(state, payload) {
            state.isRestocking = payload
        },
        isDispensing(state, payload) {
            state.isDispensing = payload
        },
        dispense(state) {
            state.supply--
        },
        stockItems(state) {
            state.supply = 40
        }
    }
})
