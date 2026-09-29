import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { FloatingWorld } from '@/components/animations/FloatingWorld';
import { CursorTrail } from '@/components/animations/CursorTrail';
import { PrimaryButton, SoftButton } from '@/components/ui';
import { colors, radius, spacing } from '@/theme';

export default function Welcome() {
  return <View style={styles.root}><FloatingWorld /><CursorTrail /><ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
    <Text style={styles.logo}>MamaMind ♡</Text>
    <Text style={styles.eyebrow}>A softer space for you</Text>
    <Text style={styles.title}>Care for mama.{`\n`}Share the care.{`\n`}Keep the little moments.</Text>
    <View style={styles.illustration}><Text style={styles.mama}>🤱</Text><Text style={styles.spark}>✦  ♡  ✦</Text></View>
    <Text style={styles.quote}>“You don't have to do motherhood perfectly. You only have to be here, one moment at a time.”</Text>
    <PrimaryButton title="Let's begin gently →" onPress={() => router.push('/login')} />
    <View style={{ height: 12 }} /><SoftButton title="I already have an account" onPress={() => router.push('/login')} />
  </ScrollView></View>;
}
const styles = StyleSheet.create({ root: { flex: 1, backgroundColor: colors.background }, content: { padding: 28, paddingTop: 72, maxWidth: 720, width: '100%', alignSelf: 'center' }, logo: { color: colors.text, fontSize: 24, fontWeight: '900' }, eyebrow: { color: colors.muted, marginTop: 8, fontWeight: '700' }, title: { color: colors.text, fontSize: 34, lineHeight: 41, fontWeight: '900', marginTop: 18 }, illustration: { marginTop: 26, minHeight: 210, borderRadius: radius.lg, backgroundColor: colors.skyLullaby, alignItems: 'center', justifyContent: 'center' }, mama: { fontSize: 100 }, spark: { color: colors.text, fontSize: 24, marginTop: -4 }, quote: { color: colors.text, fontSize: 17, lineHeight: 25, marginVertical: 24, fontWeight: '600' } });
