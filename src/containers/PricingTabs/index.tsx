import styles from '../../styles/PricingTabs.module.css';
import React, {useState} from 'react';
import AppContainer from "../AppContainer";
import {combineClassNames} from "../../utils/className";
import InfoIcon from '../../assets/svg/info.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {planFeatures, planTabs} from "../../dump/plans";

const PricingTabs = () => {
    const [activeTab, setActiveTab] = useState(planTabs[0]);

    return (
        <section className={styles.container}>
            <AppContainer.Medium>
                <div className={styles.sub}>
                    {/** Context */}
                    <div className={styles.context}>
                        <h1>Simple Pricing</h1>
                        <p>
                            Preferred stock may be hybrid by having the qualities of bonds of fixed returns and common
                            stock voting rightson.
                        </p>
                    </div>

                    {/** Tabs */}
                    <div className={styles.tabs}>
                        {/** Tab Nav */}
                        <ul className={styles.tabNavigator}>
                            {planTabs.map((tab) => (
                                <li
                                    key={`pricing-tab-${tab.id}`}
                                >
                                    <button
                                        type="button"
                                        className={combineClassNames(tab.id === activeTab?.id && styles.active)}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        <span>{tab.title}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/** Plans */}
                        <div className={styles.plans}>
                            {activeTab.plans.map((plan, planIdx) => (
                                <div
                                    className={styles.planContainer}
                                    key={`plan-${planIdx}-for-${activeTab.id}`}
                                >
                                    {/** Context */}
                                    <div className={styles.planContent}>
                                        {/** title */}
                                        <h3>{plan.name}</h3>

                                        {Boolean(plan?.save) && (
                                            <div className={styles.save}>
                                                <span>Save {plan.save}%</span>
                                            </div>
                                        )}

                                        {/** pricing */}
                                        <div className={styles.planPricing}>
                                            <h2>{activeTab.currency}{plan.price.toFixed(2)}</h2>
                                            <span>/{activeTab.periodStr}</span>
                                        </div>

                                        {/** description */}
                                        <div className={styles.planDescription}>
                                            <p>{plan.description}</p>
                                        </div>

                                        {/** Features */}
                                        <ul className={styles.features}>
                                            {planFeatures.map((feature) => {
                                                const isActive = plan.features.includes(feature.id);
                                                let color = undefined;
                                                if (isActive && plan?.checkedColor) color = plan.checkedColor;

                                                return (
                                                    (
                                                        <li
                                                            key={`feature-${feature.id}-for-test`}
                                                            className={combineClassNames(
                                                                isActive && styles.active
                                                            )}
                                                        >
                                                            {isActive && (<FontAwesomeIcon icon={faCheck} style={{ color }} />)}
                                                            {!isActive && (<span>–</span>)}

                                                            <p>{feature.name}</p>
                                                        </li>
                                                    )
                                                );
                                            })}
                                        </ul>
                                    </div>

                                    {/** Join */}
                                    <div className={styles.joinPlan}>
                                        <button>
                                            <span>Join basic plan</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/** Information */}
                    <div className={styles.information}>
                        {/** icon */}
                        <InfoIcon viewBox="0 0 30 30" />

                        {/** text */}
                        <p>
                            Les services de paiement sont disponibles via des applications mobiles et de bureau.
                        </p>
                    </div>
                </div>
            </AppContainer.Medium>
        </section>
    );
};

export default PricingTabs;

