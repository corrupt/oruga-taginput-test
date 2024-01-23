import { defineCustomElement } from "vue";

import Autocomplete from "./components/autocomplete.ce.vue";
import '@oruga-ui/theme-oruga/dist/oruga-full.css';

customElements.define(
    "my-autocomplete",
    defineCustomElement(Autocomplete)
);