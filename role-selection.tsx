import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { colors, radius, spacing } from '@/theme';
import { PrimaryButton, SoftButton } from '@/components/ui';
export default function RoleSelection(){return <View style={styles.root}><Text style={styles.title}>Who is joining the care circle?</Text><Text style={styles.sub}>MamaMind can make space for the whole family.</Text><View style={styles.card}><Text style={styles.emoji}>🌷</Text><Text style={styles.name}>Mama</Text><PrimaryButton title="Open mama's space" onPress={()=>router.replace('/mother-dashboard')}/></View><View style={styles.card}><Text style={styles.emoji}>🤍</Text><Text style={styles.name}>Partner / family</Text><SoftButton title="Open care partner space" onPress={()=>router.replace('/father-dashboard')}/></View></View>}
const styles=StyleSheet.create({root:{flex:1,backgroundColor:colors.background,padding:24,paddingTop:80,maxWidth:600,width:'100%',alignSelf:'center'},title:{fontSize:30,fontWeight:'900',color:colors.text},sub:{color:colors.muted,marginTop:7},card:{backgroundColor:colors.white,borderRadius:radius.lg,padding:spacing.lg,marginTop:20},emoji:{fontSize:36},name:{fontSize:20,fontWeight:'900',color:colors.text,marginVertical:10}});
