import  {Component} from 'react';

class MyMarkers extends Component {

  componentDidUpdate(prevProps) {
    if((this.props.map !== prevProps.map) ||
       ( this.props.position !== prevProps.position)) {
      this.markerInit();
    }
  }

  markerInit() {
    if(this.marker) {
      this.marker.setMap(null);
    }

    let {map, google, position, bounds, markerUpdate, myInfoWindow} = this.props;

    let defaultIcon = this.makeMarkerIcon('0091ff');
    let highlightedIcon = this.makeMarkerIcon('ffff24');

    position = new google.maps.LatLng(position.lat, position.lng);

    const markerPref = {
      map: map,
      position: position,
      icon: defaultIcon
    };

    this.marker = new google.maps.Marker(markerPref);
      
    const marker = this.marker;

    let self=this;

    marker.addListener('click', function() {
      self.populateInfoWindow(this, myInfoWindow)
    });

    markerUpdate(this);

    marker.addListener('mouseover', function() {
      this.setIcon(highlightedIcon);
      this.setAnimation(google.maps.Animation.BOUNCE);
    });

    marker.addListener('mouseout', function(){
      this.setIcon(defaultIcon);
      setTimeout(function() {
              marker.setAnimation(null);
          }, 700);
    });

    
    bounds.extend(marker.position);
    map.fitBounds(bounds);

  }

    makeMarkerIcon(markerColor) {
        let markerImage = new this.props.google.maps.MarkerImage(
          'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
          '|40|_|%E2%80%A2',
          new this.props.google.maps.Size(21, 34),
          new this.props.google.maps.Point(0, 0),
          new this.props.google.maps.Point(10, 34),
          new this.props.google.maps.Size(21, 34));
        return markerImage;
    }

    populateInfoWindow(marker, infowindow){
      if (infowindow.marker !== marker){
        infowindow.setContent("LOADING..");
        let {map, bounds, name} = this.props;
        let idReq,tipsReq,photosReq;

        fetch(`https://api.foursquare.com/v2/venues/search?ll=43.604429,1.443812&v=20180518&query=${name}&limit=1&client_id=M21LJWE3BGJCSYM5WDMIUBVPLLPBYMBRONPATMVGRFB5ZU0N&client_secret=U300KAHPHRYYA5MOJIDJDB3LO1XXZ3MBLS0QGQCAXT52XF3H`)
          .then(response => response.json())
          .then(data1 =>{
            idReq=data1.response.venues[0].id;
            return fetch(`https://api.foursquare.com/v2/venues/${idReq}/tips?v=20180518&limit=2&client_id=M21LJWE3BGJCSYM5WDMIUBVPLLPBYMBRONPATMVGRFB5ZU0N&client_secret=U300KAHPHRYYA5MOJIDJDB3LO1XXZ3MBLS0QGQCAXT52XF3H`)})
          .then(response => response.json())
          .then(data2 =>{
            tipsReq=data2;
            return fetch(`https://api.foursquare.com/v2/venues/${idReq}/photos?v=20180518&limit=2&client_id=M21LJWE3BGJCSYM5WDMIUBVPLLPBYMBRONPATMVGRFB5ZU0N&client_secret=U300KAHPHRYYA5MOJIDJDB3LO1XXZ3MBLS0QGQCAXT52XF3H`)})
          .then(response => response.json())
          .then(data3 =>{
            photosReq=data3;
            addContent(tipsReq, photosReq)})
          .catch(error => {
            infowindow.setContent(
              `<div class="error-window">
                <h3>Error!</h3>
                <p>Sorry, there was an error retrieving informations</p>
              </div>`
            )
          })//end of fetch req

          function addContent(tipsReq, photosReq){
            let htmlResult='';
            htmlResult+=`<header tabIndex="0"><h3>${name}</h3></header>`
             if(photosReq && photosReq.response.photos.items){
              const myPics = photosReq.response.photos.items;
              htmlResult+=`<figure>
                      <img alt="${name}" src="${myPics[0].prefix}200x200${myPics[0].suffix}"/>
                      <figcaption>A picture showing <span id="pic-tag">${name}</span> </figcaption>
                    </figure>`;
              } else {
              htmlResult+= `<div class="no-pic">
                      <p>Sorry there is no image!</p>
                     </div>`
            }
            if(tipsReq && tipsReq.response.tips.items){
              const myTips = tipsReq.response.tips.items;
              htmlResult+=`<section>
                      <h4>Some tips about the place</h4>
                      <p>${myTips[0].text}</p>
                    </section>`
            } else {
              htmlResult+=`<div class="no-tip">
                      <p>Sorry there is no info!</p>
                      </div>`
            }
              htmlResult += `<footer role="contentinfo">
                      <a href="https://en.wikipedia.org/w/index.php?search=toulouse&title=Special%3ASearch&go=Go"  onclick="open('https://en.wikipedia.org/w/index.php?search=toulouse&title=Special%3ASearch&go=Go', 'Popup', 'scrollbars=1,resizable=1,height=560,width=770'); return false;" >More infos about Toulouse</a><br />
                      </footer>`
           
            infowindow.setContent(htmlResult);
          }//end of addcontent function

        infowindow.marker=marker;
        infowindow.addListener('closeclick', function(){
          infowindow.marker=null;
        });
        infowindow.open(map, marker);
        map.fitBounds(bounds);
        map.panTo(marker.getPosition())



      }//end of "if" l:6
    }//main function

    render() {
      return null;
    }
  
}

export default MyMarkers