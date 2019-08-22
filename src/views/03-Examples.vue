<template>
  <v-container class="fill-height" fluid>
      <v-row justify="center">
        <v-col align="center">
          <h1 class="display-4">Examples</h1>
          <v-container fluid>
            <v-row>
              <v-col cols="3">
                <v-card outlined>
                  <v-img src="@/assets/03/amazon.png" height="400px" position="top left"/>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card outlined>
                  <v-img src="@/assets/03/google.png" height="400px" contain/>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card outlined>
                  <v-img src="@/assets/03/minecraft.jpg" height="400px"/>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card outlined>
                  <v-img src="@/assets/03/netflix.jpg" height="400px" position="top left"/>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'examples',
  components: {
    //
  }
}
</script>
