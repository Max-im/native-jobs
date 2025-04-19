import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import { useFetch } from "../../hook/useFetch";

import { COLORS, icons, images, SIZES } from "../../constants";
import { Company, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from "../../components";


// http://localhost:8081/job-details/R2xJuBjzz6FB2aIZAAAAAA==
export default function JobDetails() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    
    const [refresh, setRefresh] = useState(false);
    const { data, isLoading, error, refetch } = useFetch('job-details', { job_id: id });

    const tabs = {
        About: <Specifics title='About' points={data[0]?.job_description.split('\n') ?? ['N/A']} />,
        Qualifications: <Specifics title='Qualifications' points={data[0]?.job_highlights?.Qualifications ?? ['N/A']} />,
        Responsibilities: <Specifics title='Responsibilities' points={data[0]?.job_highlights?.Responsibilities ?? ['N/A']} />,
    };
    
    const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

    const onRefresh = () => { };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn imageUrl={icons.left} dimension='60%' handlePress={() => router.push(-1)} />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn imageUrl={icons.share} dimension='60%' />
                ),
                headerTitle: ''
            }} />
            <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl refreshing={false} onRefresh={() => { }} />}
                >
                    {isLoading && <ActivityIndicator size='large' color={COLORS.primary} />}
                    {error && <Text>Something went wrong</Text>}
                    {!error && !isLoading && !data.length && <Text>No data</Text>}
                    {!error && !isLoading && data.length && (
                        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                            <Company
                                logo={data[0].employer_logo}
                                name={data[0].employer_name}
                                job={data[0].job_title}
                                location={data[0].job_country}
                            />

                            <JobTabs
                                tabs={Object.keys(tabs)}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                            {tabs[activeTab]}
                        </View>
                    )}
                </ScrollView>
                <JobFooter url={data[0]?.job_google_link} />
            </>
        </SafeAreaView>
    )
}
