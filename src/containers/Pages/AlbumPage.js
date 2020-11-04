import React, {Component} from 'react';
import api from '../../api';

import './Page.scss';

import AlbumList from '../../components/Album/AlbumList';
import Pagination from '../../components/Pagination/Pagination';

import withLoader from '../../hoc/withLoader';
const AlbumWithLoader = withLoader(AlbumList);


class AlbumPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
          perPage: 10,
          page: null,
          prevPage: false,
          nextPage: false,
          albums: [],
          loading: false,
        };
    }

    async componentDidMount() {
        await this.getAlbums();
    }

    getAlbums = async (page = 1) => {
        this.setState({...this.state, loading: true});

        const albums = await api.get(`albums?_page=${page}&_limit=${this.state.perPage}`);

        for (let album of albums.data) {
            const username = await this.getUsername(album.userId);
            const length = await this.getAlbumPhotosLength(album.id);

            album.username = username;
            album.length = length;
        }

        this.pagination(albums.headers.link);

        this.setState({...this.state, page, albums: albums.data, loading: false});
    };

    getUsername = async userId => {
        const user = await api.get(`users/${userId}`);
        return user.data.username;
    };

    getAlbumPhotosLength = async albumId => {
      const photos = await api.get(`/photos?albumId=${albumId}`);
      return photos.data.length;
  };




    pagination = headers => {
        const links = headers.split(',');

        const pages = {nextPage: false, prevPage: false};

        links.forEach(link => {
            const temp = link.split(';');

            switch(temp[1].replace(/\s/g, "")) {
                case 'rel="next"':
                    pages.nextPage = true;
                    break;
                case 'rel="prev"':
                    pages.prevPage = true;
                    break;
                default:
                    break;
            }

            this.setState({...this.state, ...pages});
        });
    };

    loadNextPage = async () => {
        await this.getAlbums(this.state.page + 1);
    };

    loadPrevPage = async () => {
        await this.getAlbums(this.state.page - 1);
    };


    render() {
        const {nextPage, prevPage, page, albums, loading} = this.state;

        return (
            <main>
                <h1 className="heading1">All albums</h1>
                <AlbumWithLoader loading={loading} albums={albums} />
                <div className="titleBar">
                    <Pagination isNext={nextPage} isPrev={prevPage} current={page}
                    nextPage={this.loadNextPage} prevPage={this.loadPrevPage} />
                </div>

            </main>
        )
    }
}

export default AlbumPage;
