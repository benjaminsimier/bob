<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="right">
            <div class="right--content">
              <div class="face" ref="printMe" id="my-node" style="{ backgroundColor: skinColor}">
                <div class="face--content">
                  <div class="bg">

                    <svg v-show="faceShape === 0" xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
                      <g id="Groupe_79" data-name="Groupe 79" transform="translate(-4532 1278)">
                        <ellipse id="Ellipse_19" data-name="Ellipse 19" cx="176" cy="227.5" rx="176" ry="227.5" transform="translate(4606 -1255)" :fill="skinColor"/>
                      </g>
                    </svg>

                    <svg v-show="faceShape === 1" xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
                      <g id="Groupe_79" data-name="Groupe 79" transform="translate(-4532 1278)">
                        <path id="Tracé_1111" data-name="Tracé 1111" d="M176,0c97.2,0,176,89.53,176,199.97S273.2,445.749,176,445.749,0,310.411,0,199.97,78.8,0,176,0Z" transform="translate(4606 -1245.749)" :fill="skinColor"/>
                      </g>
                    </svg>

                  </div>

                    <ul>
                      <li v-for="part in face" :key="part.id" class="face__part" :class="'face__part--'+part.title">
                        <div class="face__part--inside" :style="'background-image: url(/images/'+part.SelectItem+')'">
                        </div>

                        <div class="accessories" v-for="accessory in accessories" :key="accessory.id">
                          <div class="accessories--glasses" v-if="part.title === 'eyes' && accessory.title === 'glasses'">
                            <div class="accessories--inside" :style="'background-image: url(/images/'+accessory.SelectItem+')'">
                            </div>
                          </div>

                          <div class="accessories--hat" v-if="part.title === 'forehead' && accessory.title === 'hat'">
                            <div class="accessories--inside" :style="'background-image: url(/images/'+accessory.SelectItem+')'">
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="col-lg-6 col-12">
          <div class="left">
            <div class="options">

              <!-- General Options -->
              <div class="next--open" v-show="face[faceOptionsOpen].open">

                <div class="next--content">
                  <div class="row">
                    <div class="col-lg-6 col-8">
                      <H3 v-if="face[faceOptionsOpen].title === 'forehead'">
                        Hair style
                      </H3>

                      <H3 v-if="face[faceOptionsOpen].title === 'nose'">
                        Nose type
                      </H3>

                      <H3 v-if="face[faceOptionsOpen].title === 'eyes'">
                        Eyes type
                      </H3>

                      <H3 v-if="face[faceOptionsOpen].title === 'mouth'">
                        Mouth type
                      </H3>
                    </div>
                    <div class="col-lg-6 col-4">
                      <div class="close" @click="face[faceOptionsOpen].open = !face[faceOptionsOpen].open">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.857" height="19.857" viewBox="0 0 19.857 19.857">
                          <path id="close" d="M11.748,10.064,19.48,2.332A1.286,1.286,0,0,0,17.661.513L9.929,8.245,2.2.513A1.286,1.286,0,0,0,.377,2.332l7.732,7.732L.377,17.8A1.286,1.286,0,1,0,2.2,19.616l7.732-7.732,7.732,7.732A1.286,1.286,0,0,0,19.48,17.8Zm0,0" transform="translate(0 -0.136)" fill="#707070"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                
                  <div class="list">
                    <div class="row">
                      <div class="col-lg-6 col-12" v-if="face[faceOptionsOpen].title === 'forehead'">
                        <div class="image" @click="face[faceOptionsOpen].SelectItem = null" :class="{ ItemActive: face[faceOptionsOpen].SelectItem === null }">
                          <img src="/images/null.png" alt="">
                        </div>
                        <span>
                          Nothing
                        </span>
                      </div>
                      <div class="col-lg-6 col-12" v-for="f in face[faceOptionsOpen].items" :key="f.id">
                        <span v-show="f.src">
                          <div class="image" @click="SelectFaceOptions(faceOptionsOpen, f.id)" :class="{ ItemActive: face[faceOptionsOpen].SelectItem === f.src }">
                              <img :src="'/images/'+f.preview" alt="">
                          </div>
                          <span>
                            {{f.title}}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bottom">
                  <button class="btn__random" @click="SelectRandom(face[faceOptionsOpen].id)">
                    Random
                  </button>
                </div>
              </div>

              <div class="next--open" v-show="faceShapeOptionsOpen">
                <div class="next--content">
                  <div class="row">
                    <div class="col-6">
                      <H3>
                        Face Shape
                      </H3>
                    </div>
                    <div class="col-6">
                      <div class="close" @click="faceShapeOptionsOpen = !faceShapeOptionsOpen">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.857" height="19.857" viewBox="0 0 19.857 19.857">
                          <path id="close" d="M11.748,10.064,19.48,2.332A1.286,1.286,0,0,0,17.661.513L9.929,8.245,2.2.513A1.286,1.286,0,0,0,.377,2.332l7.732,7.732L.377,17.8A1.286,1.286,0,1,0,2.2,19.616l7.732-7.732,7.732,7.732A1.286,1.286,0,0,0,19.48,17.8Zm0,0" transform="translate(0 -0.136)" fill="#707070"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="list">
                    <div class="row">
                      <div class="col-6" v-for="fs in faceShapes" :key="fs.id">
                        <div @click="faceShape = fs.id">
                          <div class="image" @click="SelectFaceOptions(faceOptionsOpen, f.id)" :class="{ ItemActive: faceShape === fs.id }">
                              <img :src="'/images/'+fs.preview" alt="">
                          </div>
                          <span>
                            {{fs.title}}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="options--content">
                
                <div class="options--bloc options--face">
                  <H2>
                    General
                  </H2>

                  <div class="row">
                    <div class="col-md-6 col-12" v-for="(n, i) in face.length" :key="i">
                      <H3 v-if="face[i].title === 'forehead'">
                        Hair style
                      </H3>

                      <H3 v-if="face[i].title === 'nose'">
                        Nose type
                      </H3>

                      <H3 v-if="face[i].title === 'eyes'">
                        Eyes type
                      </H3>

                      <H3 v-if="face[i].title === 'mouth'">
                        Mouth type
                      </H3>

                      <div class="next" @click="face[i].open = !face[i].open; faceOptionsOpen = i">
                        <span v-if="face[i].SelectItem == null">
                          Nothing
                        </span>
                        <span v-else>
                          <span v-if="face[i].SelectItem">
                            <span v-for="f in face[i].items" :key="f.id">
                              <span v-if="face[i].SelectItem === f.src">
                                {{f.title}}
                              </span>
                            </span>
                          </span>
                        </span>
                        <div class="icon">
                          <svg id="left-arrow" xmlns="http://www.w3.org/2000/svg" width="19.709" height="16.37" viewBox="0 0 19.709 16.37">
                            <g id="Groupe_75" data-name="Groupe 75" transform="translate(0 0)">
                              <path id="Tracé_1089" data-name="Tracé 1089" d="M1.108,48.314l-.031.007H14.265l-4.146-4.155a1.089,1.089,0,0,1,0-1.531l.645-.645a1.079,1.079,0,0,1,1.523,0l7.107,7.106a1.087,1.087,0,0,1,0,1.528L12.288,57.73a1.08,1.08,0,0,1-1.523,0l-.645-.645a1.068,1.068,0,0,1-.314-.761,1.036,1.036,0,0,1,.314-.747L14.312,51.4H1.093A1.117,1.117,0,0,1,0,50.292v-.913A1.1,1.1,0,0,1,1.108,48.314Z" transform="translate(0 -41.674)" fill="#6f7070"/>
                            </g>
                          </svg>
                        </div>
                      </div>      
                    </div>

                    <div class="col-6">
                      <H3>
                        Face Shape
                      </H3>
                      <div class="next" @click="faceShapeOptionsOpen = !faceShapeOptionsOpen">
                        <span v-for="fs in faceShapes" :key="fs.id">
                          <span v-show="faceShape === fs.id">
                            {{fs.title}}
                          </span>
                        </span>
                        <div class="icon">
                          <svg id="left-arrow" xmlns="http://www.w3.org/2000/svg" width="19.709" height="16.37" viewBox="0 0 19.709 16.37">
                            <g id="Groupe_75" data-name="Groupe 75" transform="translate(0 0)">
                              <path id="Tracé_1089" data-name="Tracé 1089" d="M1.108,48.314l-.031.007H14.265l-4.146-4.155a1.089,1.089,0,0,1,0-1.531l.645-.645a1.079,1.079,0,0,1,1.523,0l7.107,7.106a1.087,1.087,0,0,1,0,1.528L12.288,57.73a1.08,1.08,0,0,1-1.523,0l-.645-.645a1.068,1.068,0,0,1-.314-.761,1.036,1.036,0,0,1,.314-.747L14.312,51.4H1.093A1.117,1.117,0,0,1,0,50.292v-.913A1.1,1.1,0,0,1,1.108,48.314Z" transform="translate(0 -41.674)" fill="#6f7070"/>
                            </g>
                          </svg>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div class="options--bloc options--colors">
                  <H2>
                    Colors
                  </H2>
                  <div class="row">
                    <div class="col-md-6 col-12">
                      <H3>
                        Skin color
                      </H3>
                      <div class="colors">
                        <ul>
                          <li v-for="color in skinColors" :key="color.id">
                            <div class="button" @click="skinColor = color.code" :style="'background-color:'+color.code" :class="{ colorActive: skinColor === color.code }" :title="color.title">
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                      <H3>
                        Hair color
                      </H3>
                      <div class="colors">
                        <ul>
                          <li v-for="color in hairColors" :key="color.id">
                            <div class="button" @click="hairColor = color.code" :style="'background-color:'+color.code" :class="{ colorActive: hairColor === color.code }" :title="color.title">
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="options--bloc options--accessories">
                  <H2>
                    Accessories
                  </H2>
                  <div class="row">
                    <div class="col-md-6 col-12">
                      <H3>
                        For eyes
                      </H3>
                      <div class="select" @click="accessories[0].open = !accessories[0].open">
                        <span v-if="accessories[0].SelectItem == null">
                          Select an accessory
                        </span>
                        <span v-else>
                          <span v-for="accessory in accessories[0].items" :key="accessory.id">
                            <span v-if="accessories[0].SelectItem === accessory.src">
                              {{accessory.title}}
                            </span>
                          </span>
                        </span>
                        <div class="icon">
                          <svg v-show="!accessories[0].open" xmlns="http://www.w3.org/2000/svg" width="19.857" height="11.666" viewBox="0 0 19.857 11.666">
                            <g id="right-arrow" transform="translate(19.857 -101.478) rotate(90)">
                              <g id="Groupe_70" data-name="Groupe 70" transform="translate(101.478)">
                                <path id="Tracé_1086" data-name="Tracé 1086" d="M112.827,9.154,103.991.317a1.089,1.089,0,0,0-1.536,0L101.8.968a1.088,1.088,0,0,0,0,1.536l7.42,7.42L101.8,17.353a1.089,1.089,0,0,0,0,1.536l.651.65a1.089,1.089,0,0,0,1.536,0l8.845-8.845a1.1,1.1,0,0,0,0-1.542Z" transform="translate(-101.478)" fill="#707070"/>
                              </g>
                            </g>
                          </svg>
                          <svg v-show="accessories[0].open" xmlns="http://www.w3.org/2000/svg" width="19.857" height="11.666" viewBox="0 0 19.857 11.666">
                            <g id="right-arrow" transform="translate(0 11.666) rotate(-90)">
                              <g id="Groupe_70" data-name="Groupe 70" transform="translate(0)">
                                <path id="Tracé_1086" data-name="Tracé 1086" d="M11.349,10.7,2.513,19.54a1.089,1.089,0,0,1-1.536,0L.325,18.89a1.088,1.088,0,0,1,0-1.536l7.421-7.42L.317,2.5a1.089,1.089,0,0,1,0-1.536L.968.317A1.089,1.089,0,0,1,2.5.317l8.845,8.845a1.1,1.1,0,0,1,0,1.542Z" fill="#707070"/>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div class="select--open" v-show="accessories[0].open" @click="accessories[0].open = !accessories[0].open">
                        <div class="" v-for="accessory in accessories" :key="accessory.id">
                          <ul v-if="accessory.title === 'glasses'">
                            <li v-if="accessory.SelectItem != null">
                              <span @click="accessory.SelectItem = null">
                                Remove the accessory
                              </span>
                            </li>
                            <li v-for="(n, i) in accessory.items.length" :key="i">
                              <span @click="accessory.SelectItem = accessory.items[i].src" :class="{ itemActive: accessory.SelectItem === accessory.items[i].src }">
                               {{accessory.items[i].title}} 
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                      <H3>
                        Hats
                      </H3>
                      <div class="select" @click="accessories[1].open = !accessories[1].open">
                        <span v-if="accessories[1].SelectItem == null">
                          Select an accessory
                        </span>
                        <span v-else>
                          <span v-for="accessory in accessories[1].items" :key="accessory.id">
                            <span v-if="accessories[1].SelectItem === accessory.src">
                              {{accessory.title}}
                            </span>
                          </span>
                        </span>
                        <div class="icon">
                          <svg v-show="!accessories[1].open" xmlns="http://www.w3.org/2000/svg" width="19.857" height="11.666" viewBox="0 0 19.857 11.666">
                            <g id="right-arrow" transform="translate(19.857 -101.478) rotate(90)">
                              <g id="Groupe_70" data-name="Groupe 70" transform="translate(101.478)">
                                <path id="Tracé_1086" data-name="Tracé 1086" d="M112.827,9.154,103.991.317a1.089,1.089,0,0,0-1.536,0L101.8.968a1.088,1.088,0,0,0,0,1.536l7.42,7.42L101.8,17.353a1.089,1.089,0,0,0,0,1.536l.651.65a1.089,1.089,0,0,0,1.536,0l8.845-8.845a1.1,1.1,0,0,0,0-1.542Z" transform="translate(-101.478)" fill="#707070"/>
                              </g>
                            </g>
                          </svg>
                          <svg v-show="accessories[1].open" xmlns="http://www.w3.org/2000/svg" width="19.857" height="11.666" viewBox="0 0 19.857 11.666">
                            <g id="right-arrow" transform="translate(0 11.666) rotate(-90)">
                              <g id="Groupe_70" data-name="Groupe 70" transform="translate(0)">
                                <path id="Tracé_1086" data-name="Tracé 1086" d="M11.349,10.7,2.513,19.54a1.089,1.089,0,0,1-1.536,0L.325,18.89a1.088,1.088,0,0,1,0-1.536l7.421-7.42L.317,2.5a1.089,1.089,0,0,1,0-1.536L.968.317A1.089,1.089,0,0,1,2.5.317l8.845,8.845a1.1,1.1,0,0,1,0,1.542Z" fill="#707070"/>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div class="select--open" v-show="accessories[1].open" @click="accessories[1].open = !accessories[1].open">
                        <div class="" v-for="accessory in accessories" :key="accessory.id">
                          <ul v-if="accessory.title === 'hat'">
                            <li v-if="accessory.SelectItem != null">
                              <span @click="accessory.SelectItem = null">
                                Remove the accessory
                              </span>
                            </li>
                            <li v-for="(n, i) in accessory.items.length" :key="i">
                              <span @click="accessory.SelectItem = accessory.items[i].src" :class="{ itemActive: accessory.SelectItem === accessory.items[i].src }">
                               {{accessory.items[i].title}} 
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="options--bloc options--informations">
                  <H2>
                    Informations
                  </H2>

                  <div class="row">
                    <div class="col-md-6 col-12">
                      <H3>
                        Character name
                      </H3>
                      <input class="name" type="text" v-model="title" name="" id="">
                    </div>
                  </div>
                </div>
              </div>

              <div class="options--bottom generate">
                <div class="row">
                  <div class="col-md-6 col-12">
                    <div class="logo">
                      <router-link to="/">
                          <img src="@/assets/images/logo.svg" alt="logo">
                      </router-link>
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <ul>
                      <li>
                        <button class="btn__action btn__action--share">
                        </button>
                      </li>
                      <li>
                        <button class="btn__action btn__action--download" @click="forceFileDownload">
                        </button>
                      </li>
                      <li>
                        <button class="btn__random" @click="Random()">
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <img :src="output"> -->
  </div>
</template>

<script>
import html2canvas from 'html2canvas-fixsvg'
import axios from 'axios'

export default {
  data() {
    return {
      output: null,
      title: 'Bob',

      skinColor: '#E9A691',
      hairColor: '#090510',
      faceShape: 1,

      faceOptionsOpen: 0,
      faceShapeOptionsOpen: false,

      face: [
        { 
          id: 1,
          title: 'forehead',
          open: false,
          items: [
            {
              id: 1,
              title: 'Default',
              src: null,
              preview: null
            },
            {
              id: 2,
              title: 'Hair',
              src: 'face/forehead/forehead_1.png',
              preview: 'preview/forehead/forehead_1.png'
            },
          ],
          SelectItem: null
        },
        { 
          id: 2,
          title: 'eyes',
          open: false,
          items: [
            {
              id: 1,
              title: 'Default',
              src: 'face/eyes/eyes_1.png',
              preview: 'preview/eyes/eyes_1.png'
            },
            {
              id: 2,
              title: 'Eye title 1',
              src: 'face/eyes/eyes_2.png',
              preview: 'preview/eyes/eyes_2.png'
            },
            {
              id: 3,
              title: 'Eye 2',
              src: 'face/eyes/eyes_3.png',
              preview: 'preview/eyes/eyes_3.png'
            },
          ],
          SelectItem: null
        },
        { 
          id: 3,
          title: 'nose',
          open: false,
          items: [
            {
              id: 1,
              title: 'Nose 1',
              src: 'face/nose/nose_1.png',
              preview: 'preview/nose/nose_1.png'
            },
            {
              id: 2,
              title: 'Big nose',
              src: 'face/nose/nose_2.png',
              preview: 'preview/nose/nose_2.png'
            },
          ],
          SelectItem: null
        },
        { 
          id: 4,
          title: 'mouth',
          open: false,
          items: [
            {
              id: 1,
              title: 'Default',
              src: 'face/mouth/mouth_1.png',
              preview: 'preview/mouth/mouth_1.png'
            },
            {
              id: 2,
              title: 'Mouth 2',
              src: 'face/mouth/mouth_2.png',
              preview: 'preview/mouth/mouth_2.png'
            },
            {
              id: 3,
              title: 'Mouth 3',
              src: 'face/mouth/mouth_3.png',
              preview: 'preview/mouth/mouth_3.png'
            },
            {
              id: 4,
              title: 'Mouth 4',
              src: 'face/mouth/mouth_4.png',
              preview: 'preview/mouth/mouth_4.png'
            },
          ],
          SelectItem: null
        },
      ],

      accessories: [
        { 
          id: 1,
          title: 'glasses',
          open: false,
          items: [
            {
              id: 1,
              title: 'Eyeglasses',
              src: '/accessories/glasses_1.png'
            },
            {
              id: 2,
              title: 'Sunglasses',
              src: '/accessories/glasses_2.png'
            },
          ],
          SelectItem: null
        },
        { 
          id: 2,
          title: 'hat',
          open: false,
          items: [
            {
              id: 1,
              title: 'Top hat',
              src: '/accessories/hat_1.png'
            },
          ],
          SelectItem: null
        },
      ],

      skinColors: [
        {
          id: 1,
          title: 'Default',
          code: '#E9A691'
        },
        {
          id: 2,
          title: 'Ivory',
          code: '#EFCAA2'
        },
        {
          id: 3,
          title: 'Porcelain',
          code: '#F5CEB5'
        },
        {
          id: 4,
          title: 'Pale Ivory',
          code: '#FDDBC1'
        },
        {
          id: 5,
          title: 'Warm Ivory',
          code: '#FCE1A4'
        },
        {
          id: 6,
          title: 'Sand',
          code: '#F7C48E'
        },
        {
          id: 7,
          title: 'Rose Beige',
          code: '#F7BF7C'
        },
        {
          id: 8,
          title: 'Limestone',
          code: '#EFBB88'
        },
        {
          id: 9,
          title: 'Beige',
          code: '#F1C079'
        },
        {
          id: 10,
          title: 'Sienna',
          code: '#D99B79'
        },
        {
          id: 11,
          title: 'Honney',
          code: '#D89459'
        },
        {
          id: 12,
          title: 'Band',
          code: '#B18A5F'
        },
        {
          id: 13,
          title: 'Almond',
          code: '#9C6038'
        },
        {
          id: 14,
          title: 'Chestnut',
          code: '#90542B'
        },
        {
          id: 15,
          title: 'Bronze',
          code: '#7E4117'
        },
        {
          id: 16,
          title: 'Umber',
          code: '#BD6541'
        },
        {
          id: 17,
          title: 'Golden',
          code: '#884623'
        },
        {
          id: 18,
          title: 'Espresso',
          code: '#68380C'
        },
        {
          id: 19,
          title: 'Chocolate',
          code: '#341D0D'
        },
      ],

      hairColors: [
        {
          id: 1,
          title: 'Default',
          code: '#090510'
        },
        {
          id: 2,
          title: 'Brown',
          code: '#301912'
        },
        {
          id: 3,
          title: 'Brown 2',
          code: '#390000'
        },
        {
          id: 4,
          title: 'Brown 3',
          code: '#A15230'
        },
        {
          id: 5,
          title: 'Blonde',
          code: '#FBF1AE'
        },
        {
          id: 6,
          title: 'Blonde 2',
          code: '#F7D999'
        },
        {
          id: 7,
          title: 'Green',
          code: '#D9E852'
        },
        {
          id: 8,
          title: 'Green 2',
          code: '#63D8C2'
        },
        {
          id: 9,
          title: 'Green 3',
          code: '#00BA77'
        },
        {
          id: 10,
          title: 'Red',
          code: '#C0302E'
        },
        {
          id: 11,
          title: 'Pink',
          code: '#FF81B5'
        },
        {
          id: 12,
          title: 'Orange',
          code: '#FFA159'
        },
        {
          id: 13,
          title: 'Blue',
          code: '#3E63BD'
        },
      ],

      faceShapes: [
        {
          id: 0,
          title: 'Forme 1',
          preview: 'preview/shapes/shape_1.png'
        },
        {
          id: 1,
          title: 'Forme 2',
          preview: 'preview/shapes/shape_2.png'
        },
      ]

    }
  },

  mounted() {
    for(let i = 0; i < this.face.length; i++) {
      // this.face[i].SelectItem = this.face[i].items[Math.floor(Math.random()*this.face[i].items.length)];
      var rand = Math.floor(Math.random() * Math.floor(this.face[i].items.length))
      this.face[i].SelectItem = this.face[i].items[rand].src
    }

    for(let j = 0; j < this.faceShapes.length; j++) {
      let rand = Math.floor(Math.random() * Math.floor(this.faceShapes.length))
      this.faceShape = rand
    }

    for(let j = 0; j < this.skinColors.length; j++) {
      let rand = Math.floor(Math.random() * Math.floor(this.skinColors[j].code.length))
      this.skinColor = this.skinColors[rand].code
    }

    axios
      .get('https://namey.muffinlabs.com/name.json?type=male&frequency=common')
      .then(response => (this.title = response.data))
  },

  methods: {
    SelectRandom(face) {
      var id = face - 1
      var rand = Math.floor(Math.random() * Math.floor(this.face[id].items.length))
      this.face[id].SelectItem = this.face[id].items[rand].src
    },

    SelectFaceOptions(face, id) {
      var idItem = id -1;
      this.face[face].SelectItem = this.face[face].items[idItem].src
    },

    Random() {
      for(let i = 0; i < this.face.length; i++) {
        // this.face[i].SelectItem = this.face[i].items[Math.floor(Math.random()*this.face[i].items.length)];
        let rand = Math.floor(Math.random() * Math.floor(this.face[i].items.length))
        this.face[i].SelectItem = this.face[i].items[rand].src
      }

      for(let j = 0; j < this.faceShapes.length; j++) {
        let rand = Math.floor(Math.random() * Math.floor(this.faceShapes.length))
        this.faceShape = rand
      }

      for(let j = 0; j < this.skinColors.length; j++) {
        let rand = Math.floor(Math.random() * Math.floor(this.skinColors[j].code.length))
        this.skinColor = this.skinColors[rand].code
      }

      axios
      .get('https://namey.muffinlabs.com/name.json?type=male&frequency=common')
      .then(response => (this.title = response.data))
    },

    async print() {
      const el = this.$refs.printMe;
      const options = {
        type: 'dataURL',
        useCORS: true,
        allowTaint: true,
      }
      this.output = await html2canvas(el, options);
    },

    async forceFileDownload() {
      const el = this.$refs.printMe;
      const options = {
        type: 'dataURL',
        // useCORS: true,
        // allowTaint: true,
        // logging: false,
        // width: 400,
        // height: 400,
        // windowWidth: 400,
        // windowHeight: 400,
        // scale: 2
      }
      this.output = await this.$html2canvas(el, options)
      const link = document.createElement('a')
      link.href = this.output
      link.setAttribute('download', this.title+'.jpg')
      document.body.appendChild(link)
      link.click()
    },
  }, 
}
</script>