import React, {Component} from 'react';
import {Link} from "react-router-dom";

import api from '../../api';

import  './Page.scss';

import PhotoList from '../../components/Photos/PhotoList';
import AuthorDetails from '../../components/User/AuthorDetails';
import PhotoFullSize from "../../components/Photos/PhotoFullSize";

import withLoader from '../../hoc/withLoader';
import Aux from '../../hoc/hocAux';
const AuxWithLoader = withLoader(Aux);


class PhotosPage extends Component {
    constructor(props) {
        super(props);
        const {match} = this.props;

        this.state = {
            album: {
                id: match.params.id,
                title: null
            },
            user: {
                id: null,
                name: null,
                email: null,
                phone: null,
                website: null
            },
            photos: [],
            posts: [],
            loading: false,
            imgFullSize: false,
            fullSizeURL: null
        };
    }

    async componentDidMount() {
        this.setState({...this.state, loading: true});

        const album = await this.getAlbum(this.state.album.id);
        const {userId, id, title} = album;

        const albumState = {id, title};

        const user = await this.getUser(userId);
        const {name, email, phone, website} = user;

        const userState = {id: userId, name, email, phone, website};

        const photos = await this.getAlbumPhotos(id);

        const posts = await this.getUserPosts(userId);

        this.setState({album: albumState, user: userState, photos, posts, loading: false});
    }

    getAlbum = async id => {
        const album = await api.get(`albums/${id}`);
        return album.data;
    };

    getUser = async id => {
        const user = await api.get(`users/${id}`);
        return user.data;
    };

    getAlbumPhotos = async albumId => {
        const photos = await api.get(`photos?albumId=${albumId}`);
        return photos.data;
    };

    getUserPosts = async userId => {
      const posts = await api.get(`posts?userId=${userId}&_limit=2`);
      return posts.data;
    };

    displayFullSize = url => {
        this.setState({...this.state, imgFullSize: true, fullSizeURL: url});
    };

    closeFullSize = () => {
      this.setState({...this.state, imgFullSize: false, fullSizeURL: null});
    };

    render() {
        return (
            <main className="main main--col">
                    <div className="titleBarPhoto">
                        <h1 className="heading1">Album: {this.state.album.title}</h1>
                        <Link className="back" to='/'> Back</Link>
                    </div>
                <AuthorDetails info={this.state.user} posts={this.state.posts}/>
                <AuxWithLoader loading={this.state.loading}>
                    <div className="photosPage">
                        <PhotoList photos={this.state.photos} photoClick={this.displayFullSize} />
                    </div>
                </AuxWithLoader>

                <PhotoFullSize show={this.state.imgFullSize} url={this.state.fullSizeURL} photos={this.state.photos}
                    close={this.closeFullSize} />
            </main>
        )
    }
}

export default PhotosPage;
