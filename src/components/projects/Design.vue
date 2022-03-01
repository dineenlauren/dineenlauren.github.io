<template>
  <b-container fluid="sm" class="mt-5 content-container relative">
    <div class="project-title">
      <h3>Template Creations</h3>
    </div>
    <!-- ROW 1 -->
    <b-row class="mx-2 my-4">
      <b-col md="4" class="py-3 bg-pink">
        <h4>Marketing Packages</h4>
        <p>
          <a
            href="https://1drv.ms/b/s!AkJ14tXYdZLJgfAwtcWoCOeWOrirKA?e=6ipdRz"
            target="blank"
            >Preview<b-icon-caret-right-fill></b-icon-caret-right-fill
          ></a>
        </p>
      </b-col>
      <b-col>
        <a
          href="https://1drv.ms/b/s!AkJ14tXYdZLJgfAwtcWoCOeWOrirKA?e=6ipdRz"
          target="_blank"
          ><b-img :src="require('../../assets/images/om_img.png')" fluid alt="Marketing Design Pages"></b-img
        ></a>
      </b-col>
      <b-col cols="12" class="project-text">
        <p>
          <span class="emphasis">What it is: </span> A marketing package for a
          large scale, multi-family apartment building for sale
        </p>
        <p>
          <span class="emphasis">Overview:</span>
          I create, design and implement marketing packages for commercial real
          estate brokers listing a property for sale.
        </p>
        <p><span class="emphasis">How it works: </span></p>
        <p>
          <b-icon-caret-right-fill></b-icon-caret-right-fill> I obtain detailed
          property information via county and/or city records, previous sale
          comparables and listing broker.
        </p>
        <p>
          <b-icon-caret-right-fill></b-icon-caret-right-fill> I design and
          create all maps and graphics (aside from property renderings - those
          are obtained by listing broker).
        </p>
        <p>
          <b-icon-caret-right-fill></b-icon-caret-right-fill> I enhance and/or
          edit all photos in Photoshop
        </p>
        <p>
          <b-icon-caret-right-fill></b-icon-caret-right-fill> I create and
          design each page to suit the content
        </p>
      </b-col>
    </b-row>

    <!-- ROW 2 -->
    <b-row class="mx-2 my-4">
      <b-col md="4" order="1" order-md="2" class="py-3 bg-pink">
        <h4>Financial Calculators</h4>
        <p>
          <a
            href="https://1drv.ms/x/s!AkJ14tXYdZLJgfAtkSAJbv544ZMcfQ?e=7diBfH"
            target="blank"
            ><b-icon-caret-left-fill></b-icon-caret-left-fill>Preview</a
          >
        </p>
      </b-col>
      <b-col order="2" order-md="1">
        <a
          href="https://1drv.ms/x/s!AkJ14tXYdZLJgfAtkSAJbv544ZMcfQ?e=7diBfH"
          target="_blank"
          ><b-img
            :src="require('../../assets/images/excel_img.png')"
            fluid alt="Excel financial calculator spreadsheet"
          ></b-img
        ></a>
      </b-col>
      <b-col order="3" cols="12" class="project-text">
        <p>
          <span class="emphasis">What it is: </span> An Excel template which
          streamlines the calcuations of property financials saving listing
          brokers time and preventing errors
        </p>
        <p>
          <span class="emphasis">Overview:</span>
          Computes all necessary operating financials pertaining to a
          multi-family property
        </p>
        <p><span class="emphasis">How it works: </span></p>
        <p>
          <b-icon-caret-right-fill></b-icon-caret-right-fill> The listing broker
          inputs property information into specified cells, and the rest is
          automatically calculated and populated
        </p>
      </b-col>
    </b-row>

    <!-- ROW 3 -->
    <b-row class="mx-2 my-4">
      <b-col md="4" class="py-3 bg-pink">
        <h4>Misc. Projects</h4>
      </b-col>
      <b-col>
        <b-img :src="require('../../assets/images/misc_img.png')" fluid alt="collage of different project images"></b-img>
      </b-col>
      <b-col cols="12" class="project-text">
        <p>
          <span class="emphasis">What it is: </span> I design and create an
          array of different marketing materials for clients
        </p>
        <p>
          <span class="emphasis">Overview:</span>
          Postcards, yard signs, social media listing updates, flyers
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BIconCaretRightFill } from "bootstrap-vue";
import { BIconCaretLeftFill } from "bootstrap-vue";

export default {
  name: "Design",
  components: {
    BIconCaretRightFill,
    BIconCaretLeftFill,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.emphasis {
  display: inline;
}

p > a {
  color: white;
  text-shadow: 2px 1px 2px #5d5d5d;
}
h4 {
  color: white;
  margin-bottom: 0 !important;
  text-shadow: 2px 1px 2px #5d5d5d;
}

p > .bi-caret-right-fill {
  color: #ca7a69;
}
.arrow-right {
  width: 0;
  height: 0;
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
  border-left: 10px solid #706e6e;
  margin-right: auto;
  padding-top: 1px;
}
</style>
