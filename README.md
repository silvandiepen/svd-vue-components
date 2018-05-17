# SVD Vue components, easy components which use svd-style.

## installation
`npm install svd-vue-components`

### Also needs
`npm install svd-style`


## usage

``
import Vue from 'vue'
import * as Components from 'svd-vue-components';
Vue.use(Components['svd-vue-components'].default);
``


## Grid Components

Makes:
``<div class=“row center”>
    <div class=“column small-full medium-third”>
        Hoi
    </div>
</div>``

from:
``<row center>
    <column medium=“1:3”>
        Hoi
    </column>
</row>``

## Menu Components

Makes:
``<div class=“row center”>
    <div class=“column small-full medium-third”>
        Hoi
    </div>
</div>``

from:
``<menu-container>
  <menu-group>
    <menu-item link="#home">Home</menu-item>
    <menu-item link="#news>About</menu-item>
    <menu-item link="#news>News</menu-item>
    <menu-item link="#news>Contact</menu-item>
  </menu-group>
</menu-container>``



so ugly.. still working on this.

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
