---
show: true
width: 4
date: "{{ now | date: '%s'    | minus: 3600    | date: '%Y-%m-%d %H:%M:%S %z' }}"
---
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
<style>
    .badges-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        position: relative;
    }
    .gallery-link {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 3px;
      text-align: right;
    }
    .creation-link {
      position: absolute;
      top: 45px;
      right: 20px;
      padding: 3px;
      text-align: right;
    }
    .badge {
        display: inline-flex;
        align-items: center;
        padding: 5px 10px;
        border-radius: 5px;
        color: white;
        margin: 5px;
        font-size: 0.9em;
    }
    .break {
        flex-basis: 100%;  /* 强制换行 */
        height: 0;         /* 不显示额外空间 */
    }
    
    .Travelling { background-color: #205EA7; }
    .Cookery { background-color: #38B6C4; }
    .Tea { background-color: #B8E5FA; }
    .Painting { background-color: #38B6E9; }
    .Photography { background-color: #1D91C2; }

</style>
<div class="p-4 text-center">
    <h6>Hobbies</h6>
    <div class="badges-container">
        <div class="badge Travelling"><i class="fa-solid fa-globe"></i> Travelling</div>
        <div class="badge Cookery"> <i class="fa-solid fa-cutlery"></i> Cookery</div>
        <div class="badge Tea"> <i class="fa-solid fa-coffee"></i> Tea</div>
        <div class="badge Painting"><i class="fa-solid fa-paint-brush"></i> Painting</div>
        <div class="badge Photography"><i class="fa-solid fa-camera-retro"></i> Photography</div>
    </div>
</div>