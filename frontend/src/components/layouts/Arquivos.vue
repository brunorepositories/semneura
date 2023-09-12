<template>
  <div>
    <v-col cols="12" sm="6" md="4">
      <v-text-field variant="outlined" label="Código" />
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-text-field
        variant="outlined"
        label="País*"
        hint="example of helper text only on focus"
      />
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-text-field
        variant="outlined"
        label="Legal last name*"
        hint="example of persistent helper text"
        persistent-hint
        required
      />
    </v-col>

     
    <v-col cols="12">
                <v-text-field variant="outlined" label="Email*" required />
              </v-col>

              <v-col cols="12" sm="6">
                <v-select variant="outlined"  :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required />
              </v-col>


    <v-col cols="12">
      <v-text-field variant="outlined" label="Email*" required />
    </v-col>
             
    <v-col cols="12" sm="6">
                <v-autocomplete
                  variant="outlined" 
                  :items="items" 
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
    

    <v-col cols="12">
      <v-text-field
        variant="outlined"
        label="Password*"
        type="password"
        required
      />
    </v-col>

    <v-col cols="12" sm="6">
      <v-select
        variant="outlined"
        :items="['0-17', '18-29', '30-54', '54+']"
        label="Age*"
        required
      />
    </v-col>
  </div>
  

</template>

<script>
export default {};
</script>

<style>
</style>