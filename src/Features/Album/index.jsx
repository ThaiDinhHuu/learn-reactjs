import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';
AlbumFeature.propTypes = {

};

function AlbumFeature(props) {

      const albumList = [
            {
                  id: 1,
                  name: 'Nghe hết hit của Noo Phước Thịnh tại đây',
                  thumbURL: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/9/0/e/a90ec09aa0a101049eba0a61487f2abe.jpg',
            },
            {
                  id: 2,
                  name: 'Những Bài Hát Hay Nhất Của Hồ Ngọc Hà',
                  thumbURL: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/c/b/5/9cb58b29faecf9b759caad1c426f473c.jpg',
            },
            {
                  id: 3,
                  name: 'Văn Mai Hương và bộ sưu tập hit nổi bật',
                  thumbURL: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/9/a/c/69ac204ab8011eb0cd5f0b4caa0acc95.jpg',
            },
      ];

      return (
            <div>
                  <h2>Nghệ Sĩ Thịnh Hành</h2>
                  <AlbumList albumList={albumList} />
            </div>
      );
}

export default AlbumFeature;