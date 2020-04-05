<template>
  <div>
    <ui5-card
      avatar="group"
      heading="Kart Başlığı"
      subheading="Direct Reports"
      status="3 of 10"
      class="ui5card"
    >
      <div class="card-content">
        <ui5-list separators="None" class="card-content-child" style="width: 100%" >
          <ui5-li :image="brokoli" description="User Researcher">Brokoli 
            <ui5-avatar :image="brokoli" shape="Square"/>
          </ui5-li>
          <ui5-li :image="tavuk" description="Artist">Tavuk</ui5-li>
          <ui5-li :image="ketil" description="UX Specialist">Kettle</ui5-li>
        </ui5-list>
      </div>
    </ui5-card>

    <p>
      <ui5-button design="Positive" icon="add" @click="saveEdits">Add</ui5-button>
      <ui5-button design="Negative" icon="delete">Remove</ui5-button>
      <ui5-button design="Transparent" icon="accept">Transparent</ui5-button>
    </p>
    <hr>
    <p>
      <ui5-badge color-scheme="4">
        <ui5-icon name="lab" slot="icon"></ui5-icon>
    </ui5-badge>
    <ui5-badge color-scheme="3">
      <ui5-icon name="add-equipment" slot="icon"></ui5-icon>in process
    </ui5-badge>
    </p>
    <hr>
    <p>
      <ui5-button icon="away" aria-labelledby="lblAway"></ui5-button>
      <ui5-button icon="action-settings" aria-labelledby="lblSettings" ></ui5-button>
      <ui5-button icon="add" aria-labelledby="lblAdd"></ui5-button>
      <ui5-button icon="alert" aria-labelledby="lblAlert"></ui5-button>
      <ui5-button icon="accept" design="Positive" aria-labelledby="lblAccept"></ui5-button>
      <ui5-button icon="bookmark" design="Positive" aria-labelledby="lblBookmark"></ui5-button>
      <ui5-button icon="cancel" design="Negative" aria-labelledby="lblCancel" ></ui5-button>
      <ui5-button icon="call" design="Negative" aria-labelledby="lblCall" ></ui5-button>
      <ui5-button icon="camera" design="Transparent" aria-labelledby="lblCamera"></ui5-button>
      <ui5-button icon="cart" design="Transparent" aria-labelledby="lblCart"></ui5-button>
      <ui5-label style="display:none" id="lblAdd" aria-hidden="true">Add</ui5-label>
    </p>
    <hr>
    <p>
      <ui5-carousel>
        <img :src="brokoli" alt="Brokoli 1">
        <img :src="tavuk" alt="Tavuk">
        <img :src="ketil" alt="Bulb">
    </ui5-carousel>
    </p>
    <hr>
    <p>
      <ui5-combobox placeholder="Contains" filter="Contains">
        <ui5-cb-item text="Austria"></ui5-cb-item>
        <ui5-cb-item text="Bulgaria"></ui5-cb-item>
        <ui5-cb-item text="Germany"></ui5-cb-item>
        <ui5-cb-item text="United Kingdom"></ui5-cb-item>
        <ui5-cb-item text="Kazakhstan"></ui5-cb-item>
      </ui5-combobox>
    </p>
    <ui5-toast id="wcToastBasic" ref="toastRef">Basic Toast</ui5-toast>
  </div>
</template>

<script>

import brokoli from "../assets/img/broccolli.png";
import tavuk from "../assets/img/chicken.png";
import ketil from "../assets/img/kettle.png";

export default {
  data: function() {
    return {
      brokoli : brokoli,
      tavuk : tavuk,
      ketil : ketil
    };
  },
  methods: {
    saveEdits() {
      //var msg = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\r\n eirmod.';
      //MessageToast.show(msg);
      //alert(msg);
      this.$refs["toastRef"].show();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
