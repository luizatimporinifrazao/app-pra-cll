//1 etapa -- tela inicial

//oq fazemos aq?
//esta é a tela inicial do app (rota "/")

import {View, text, ScrollView, FlatList, pressable, StyleSheet} from "react-native";
//view - container basico
//text - para exibir texto
//ScrollView - permite rolagem vertical
//flatlist - lista otimizadora com rolagem
//pressable - botão feedback de todos
//StyleShett - define estilos

import {useRouter} from "explo-router";
//acesso ao objeto router, tem a função de navegação baseada em arquivos.
import GameCard from "../components/GameCard";
//realizar componentes, isso evita duplicação de codigo e mantem a consistencia visual

import {jogos} from "../data/jogos";
//importante uma array de objeto do arquivo data/jogos.js

import {cores} from "../data/tema";
//importa a paleta de cores do app do arquivo data/tema.js
//=======================================
export default functuion Inicio(){
    //obtemos o objeto de navegação

///====================================================
//                bloco 1
//=====================================================

    cont router = useRouter();
    //percorre o array jogos e croa um novo array destaques completo apenas os objetos
    const destaques = jogos.filter((jogo) => jogo.destaque)
     const populares = [...jogos].sort((a, b) => b.nota - a.nota).slice(0,5);
     //...jogos -> cria uma copia do array original
     //sort((a, b) => b.nota - a.nota) ordena a cópa da maior nota para a menor
     //.slice(0,5): extrai apenas 5 primeiros elementos do array

///====================================================
//                bloco 2
//=====================================================

return(
    //inicio di JSX retornando pelo componente: define o que será renderizado na tela
    <ScrollView style ={style.container} contentContainerStyle={StyleSheet.conteudo}>
        {/*container com rolagem vertical*/}
        <text style={styles.titulo}>GameHub</text>
        {/*container com rolagem vertical*/}
        <text style={styles.subtitulo}>um universo de jogos em um só lugar</text>


//====================================================
//                bloco 2.1- seção de jogos
//=====================================================

    



//====================================================
//                bloco 2.2- os mais populares
//=====================================================

    <text style={styles.secaoTitulo}>Mais Populares</text>
    {
        /*Titulo da segunda seção, reaproveitando o mesmo estilo "sessão titulo"*/
        <FlatList
            data={populares}
            //desta vez a fonte de dados é o array "populares"(top 5 por nota)
            keyExtractor={(iten) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item})} => <GameCard jogo={item}/>}

    
//====================================================
//                bloco 2.3- botão "ver todos jogos"
//=====================================================
    <pressable>
        style={style.botao}
        onPress={() => router.push("./jogos")}
        //onPress: função executada quando o usuario toca no botão
        //router.push("/jogos") navega para a rota "jogos"

        <text style={styles.botao}> Ver todos os jogos </text>

    </pressable>




    </ScrollView>


);

}

//====================================================
//                bloco 3- botão "ver todos jogos"
//=====================================================


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: cores.fundo,
    },

    conteudo:{
        padding:20,
        paddingButton: 40,
    },

    titulo: {
        fontSize: 32,
        fontWeight: "bold",
        color: cores.textoPrincipal,
    },
    subtitulo: {
        fontSize: 15,
        marginTop: 4,
        marginBottom:24,
        color: cores.textoSecundario,
    },

    secaoTitulo:{
        fontSize: 18,
        fontWeight: "Bold",
        color: cores.textoPrincipal,
        marginTop: 8,
        marginBottom: 12,
    },
    botão: {
        backgroundColor: cores.roxo,
        borderRadius: 12,
        paddinfVertical: 14,
        alingItems:"center",
    },
    textoBotao: {
        color: cores.textoPrincipal,
        fontSize: 16;
        fontWeight: "bold",
    }
    
})
