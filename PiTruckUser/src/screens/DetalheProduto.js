import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions, TextInput, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";
import _ from "lodash"

var { height, width } = Dimensions.get('window');
type Props = {};
export default class detalheProdutos extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            deviceWidth: width,
            deviceHeight: height,
            placeData: props.place
        };
    }

    componentDidMount() {

    }

    render() {
        console.log("Local recebido do placeData: ")
        console.log(this.state.placeData)
        return (

            <View style={styles.container}>

                <Text style={styles.welcome}> Detalhes do produtos </Text>



                <Text >Nome : {this.state.placeData.nome}</Text>
                <Text >Tipo : {this.state.placeData.tipo}</Text>
                <Text >uid : {this.state.placeData.uid}</Text>


                <TouchableOpacity onPress={() => this.abrirDashboard()} style={styles.loginButton} >
                    <Text style={styles.buttonText}>Voltar para dashboard</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.deletaProduto()} style={styles.deleteButton} >
                    <Text style={styles.buttonText}>Deletar</Text>
                </TouchableOpacity>


            </View>
        );
    }


    deletaProduto() {
        console.log("função de deletar");

/*         var produtoRef = firebase.database().ref('Places/' + this.state.placeData.uid);
        produtoRef.remove()
            .then(function () {
                console.log("Remove succeeded.")
                Alert.alert("", "Local removido com sucesso!")
                Actions.placeList();
            })
            .catch(function (error) {
                console.log("Remove failed: " + error.message)
            }); */
    }



    cadastroProdutos() {
        Actions.cadastroProdutos();
    }
    abrirDashboard() {
        Actions.dashboard();
    }
    abriProdutos() {
        Actions.produtos();
    }

    abrirRota() {
        Actions.rota();
    }

    cadastroProdutos() {
        Actions.rota();
    }
    abrirCadastroProdutos() {
        Actions.cadastroProdutos();
    }
    detalhesProdutos() {
        Actions.detalhesProdutos();
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    backButton: {
        backgroundColor: "gray",
        borderRadius: 10,
        padding: 10,
        margin: 20,
        alignSelf: "flex-start"
    },
    registerButton: {
        backgroundColor: "green",
        borderRadius: 10,
        padding: 10,
        margin: 20,
        width: width * 0.8,
        alignItems: 'center'
    },
    buttonText: {
        color: "white"
    },
    inputStyle: {
        height: height * 0.06,
        width: width * 0.85,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        margin: width * 0.04
    },
    titleText: {
        fontSize: 30,
        alignItems: 'center',
        textAlign: 'center',
        color: "#039BE5"

    },
    deleteButton: {
        backgroundColor: "#F00",
        borderRadius: 10,
        padding: 10,
        margin: 20,
        width: width * 0.5,
        alignItems: 'center'
    },
    loginButton: {
        backgroundColor: "#23541b",
        borderRadius: 10,
        padding: 10,
        margin: 20,
        width: width * 0.5,
        alignItems: 'center'
    },
    rowView: {
        flex: 1,
        flexDirection: "row",
    },
    productName: {
        color: "blue",
        fontSize: 50
    },

});
