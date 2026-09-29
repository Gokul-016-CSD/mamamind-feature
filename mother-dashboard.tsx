import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { getUser, type User } from '@/services/auth';
import { colors, radius, spacing } from '@/theme';
import { FloatingWorld } from '@/components/animations/FloatingWorld';
import { MoodCheckIn } from '@/components/MoodCheckIn';
import { JourneyGame } from '@/components/JourneyGame';
import { Card, SectionTitle, SoftButton } from '@/components/ui';
import { dailyQuotes } from '@/content/quotes';

export default function MotherDashboard(){const[user,setUser]=useState<User|null>(null);useEffect(()=>{getUser().then(setUser)},[]);const hour=new Date().getHours();const greeting=hour<12?'Good morning':hour<17?'Good afternoon':'Good evening';return <View style={styles.root}><FloatingWorld calm/><ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}><Text style={styles.hello}>{greeting}, {user?.name||'mama'} ♡</Text><Text style={styles.sub}>How are you and {user?.babyName||'your little one'} doing today?</Text><MoodCheckIn/><Card style={{marginTop:16,backgroundColor:colors.butterYellow}}><Text style={styles.quote}>“{dailyQuotes[Math.floor(new Date().getDate()%dailyQuotes.length)]}”</Text><Text style={styles.quoteBy}>A little reminder for you today.</Text></Card><JourneyGame/><SectionTitle title="A softer day, one tiny thing at a time" subtitle="Choose whatever feels kind—not whatever feels productive."/><View style={styles.grid}><SoftButton title="♡ Breathe" onPress={()=>router.push('/breathe')}/><SoftButton title="☁ Sleep & rest" onPress={()=>router.push('/sleep')}/><SoftButton title="📖 Journal" onPress={()=>router.push('/journal')}/><SoftButton title="🌷 Self-care" onPress={()=>router.push('/daily-care')}/><SoftButton title="💛 Happy Jar" onPress={()=>router.push('/happy-jar')}/><SoftButton title="🤍 Community" onPress={()=>router.push('/community')}/></View><View style={{height:20}}/><SoftButton title="Settings" onPress={()=>router.push('/settings')}/></ScrollView></View>}
const styles=StyleSheet.create({root:{flex:1,backgroundColor:colors.background},content:{padding:20,paddingTop:60,maxWidth:900,width:'100%',alignSelf:'center'},hello:{fontSize:30,fontWeight:'900',color:colors.text},sub:{color:colors.muted,fontSize:15,lineHeight:21,marginBottom:18},quote:{fontSize:18,lineHeight:26,fontWeight:'800',color:colors.text},quoteBy:{color:colors.muted,marginTop:8},grid:{flexDirection:'row',flexWrap:'wrap',gap:10}});
